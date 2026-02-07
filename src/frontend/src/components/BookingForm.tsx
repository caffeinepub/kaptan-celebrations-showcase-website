import { useState } from 'react';
import { useSubmitBookingForm } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, Upload, X } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { ExternalBlob } from '../backend';

export function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: undefined as Date | undefined,
    message: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const submitBookingForm = useSubmitBookingForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.eventType) {
      toast.error('Please select an event type');
      return;
    }

    try {
      // Convert uploaded files to ExternalBlob
      const referenceFiles: ExternalBlob[] = [];
      
      for (const file of uploadedFiles) {
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const blob = ExternalBlob.fromBytes(uint8Array).withUploadProgress((percentage) => {
          setUploadProgress((prev) => ({ ...prev, [file.name]: percentage }));
        });
        referenceFiles.push(blob);
      }

      await submitBookingForm.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        eventType: formData.eventType,
        eventDate: formData.eventDate ? BigInt(formData.eventDate.getTime() * 1000000) : null,
        message: formData.message,
        referenceFiles,
      });

      toast.success('Your quote request has been submitted. We\'ll get back to you soon!');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: undefined,
        message: '',
      });
      setUploadedFiles([]);
      setUploadProgress({});
    } catch (error) {
      toast.error('Failed to submit booking request. Please try again.');
      console.error('Booking submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Request a Quote
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your celebration vision with us and let our party planners create something extraordinary
            </p>
          </div>

          {/* Booking Form Card */}
          <Card className="border-gold/20 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <CardHeader className="space-y-2">
              <CardTitle className="text-3xl font-serif text-gold">
                Tell Us About Your Event
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and upload any design references or inspiration images. We'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                  <Label htmlFor="fullName" className="text-base">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="border-gold/30 focus:border-gold"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
                  <Label htmlFor="email" className="text-base">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-gold/30 focus:border-gold"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-400">
                  <Label htmlFor="phone" className="text-base">
                    Phone Number <span className="text-muted-foreground text-sm">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 7973915670"
                    className="border-gold/30 focus:border-gold"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-500">
                  <Label htmlFor="eventType" className="text-base">
                    Event Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, eventType: value }))}
                    required
                  >
                    <SelectTrigger className="border-gold/30 focus:border-gold">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Birthday">Birthday</SelectItem>
                      <SelectItem value="Wedding">Wedding</SelectItem>
                      <SelectItem value="Anniversary">Anniversary</SelectItem>
                      <SelectItem value="Corporate">Corporate</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Event Date */}
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-600">
                  <Label htmlFor="eventDate" className="text-base">
                    Event Date <span className="text-muted-foreground text-sm">(optional)</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-gold/30 hover:border-gold"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.eventDate ? format(formData.eventDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.eventDate}
                        onSelect={(date) => setFormData((prev) => ({ ...prev, eventDate: date }))}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Message */}
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-700">
                  <Label htmlFor="message" className="text-base">
                    Message / Description
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision, theme preferences, guest count, dietary requirements, or any special requests..."
                    rows={6}
                    className="border-gold/30 focus:border-gold resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-800">
                  <Label htmlFor="fileUpload" className="text-base">
                    Design References <span className="text-muted-foreground text-sm">(optional)</span>
                  </Label>
                  <div className="border-2 border-dashed border-gold/30 rounded-lg p-6 text-center hover:border-gold transition-colors">
                    <Upload className="h-8 w-8 text-gold mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload images or design references
                    </p>
                    <Input
                      id="fileUpload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Label
                      htmlFor="fileUpload"
                      className="cursor-pointer text-gold hover:text-gold/80 text-sm font-medium"
                    >
                      Choose Files
                    </Label>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2 mt-4">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gold/5 rounded-lg border border-gold/20"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-10 h-10 bg-gold/10 rounded flex items-center justify-center flex-shrink-0">
                              <Upload className="h-5 w-5 text-gold" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024).toFixed(1)} KB
                              </p>
                              {uploadProgress[file.name] !== undefined && uploadProgress[file.name] < 100 && (
                                <div className="w-full bg-gold/20 rounded-full h-1 mt-1">
                                  <div
                                    className="bg-gold h-1 rounded-full transition-all duration-300"
                                    style={{ width: `${uploadProgress[file.name]}%` }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFile(index)}
                            className="flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-white text-lg py-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-900"
                  disabled={submitBookingForm.isPending}
                >
                  {submitBookingForm.isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Quote Request'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground animate-in fade-in duration-700 delay-1000">
            <p>
              By submitting this form, you agree to be contacted by Kaptan Celebrations regarding your event.
              <br />
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
