import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface BookingSubmission {
    id: string;
    fullName: string;
    email: string;
    message: string;
    timestamp: bigint;
    referenceFiles: Array<ExternalBlob>;
    phone?: string;
    eventDate?: bigint;
    eventType: string;
}
export interface GalleryItem {
    id: string;
    title: string;
    videoLength?: bigint;
    thumbnailUrl?: string;
    tags: Array<string>;
    description: string;
    mediaUrl: string;
    seoKeywords: Array<string>;
    mediaType: string;
    category: string;
    uploadDate: bigint;
    altText: string;
}
export interface Testimonial {
    id: string;
    clientName: string;
    feedback: string;
    timestamp: bigint;
    eventType: string;
}
export interface backendInterface {
    addGalleryItem(id: string, title: string, description: string, category: string, mediaType: string, mediaUrl: string, thumbnailUrl: string | null, videoLength: bigint | null, seoKeywords: Array<string>, altText: string, tags: Array<string>): Promise<void>;
    addTestimonial(id: string, clientName: string, eventType: string, feedback: string): Promise<void>;
    getAllBookingSubmissions(): Promise<Array<BookingSubmission>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllGalleryItems(): Promise<Array<GalleryItem>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getBookingSubmission(id: string): Promise<BookingSubmission>;
    getGalleryItemsByCategory(category: string): Promise<Array<GalleryItem>>;
    getGalleryItemsByTags(tags: Array<string>): Promise<Array<GalleryItem>>;
    getMyContactSubmission(): Promise<ContactSubmission>;
    getTestimonial(id: string): Promise<Testimonial>;
    getTestimonialsByClientName(clientName: string): Promise<Array<Testimonial>>;
    submitBooking(id: string, fullName: string, email: string, phone: string | null, eventType: string, eventDate: bigint | null, message: string, referenceFiles: Array<ExternalBlob>): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
}
