import { useState } from 'react';
import { useGetAllGalleryItems } from '../hooks/useQueries';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play } from 'lucide-react';

export function Portfolio() {
  const { data: galleryItems, isLoading } = useGetAllGalleryItems();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = galleryItems
    ? ['all', ...Array.from(new Set(galleryItems.map((item) => item.category)))]
    : ['all'];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems?.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Our Gallery
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our birthday cakes, party decorations, and anniversary celebrations through photos and videos
            </p>
            <p className="sr-only">
              View Kaptan Celebrations gallery featuring birthday cakes, anniversary cakes, party decoration videos and images, and celebration designs by our expert party planners
            </p>
          </div>

          {/* Category Filter */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize data-[state=active]:bg-gold data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Gallery Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-64 w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredItems && filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border hover:border-gold"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    {item.mediaType === 'video' ? (
                      <>
                        <video
                          src={item.mediaUrl}
                          poster={item.thumbnailUrl || undefined}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          className="w-full h-full object-cover"
                          title={`${item.title} - Kaptan Celebrations cake party decoration video`}
                          aria-label={item.altText}
                        >
                          <track kind="captions" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2">
                          <Play className="w-5 h-5 text-gold" />
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          src={item.mediaUrl}
                          alt={item.altText}
                          title={`${item.title} - Kaptan Celebrations (Kaptan Groceries)`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="capitalize">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {item.seoKeywords && item.seoKeywords.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {item.seoKeywords.slice(0, 4).map((keyword, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No gallery items available yet. Check back soon for birthday cakes, party decorations, and celebration videos!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
