import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { GalleryItem, Testimonial, ContactSubmission, BookingSubmission, ExternalBlob } from '../backend';

// Gallery Queries (replaces Portfolio)
export function useGetAllGalleryItems() {
  const { actor, isFetching } = useActor();

  return useQuery<GalleryItem[]>({
    queryKey: ['galleryItems'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllGalleryItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGalleryItemsByCategory(category: string) {
  const { actor, isFetching } = useActor();

  return useQuery<GalleryItem[]>({
    queryKey: ['galleryItems', category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItemsByCategory(category);
    },
    enabled: !!actor && !isFetching && !!category,
  });
}

// Testimonial Queries
export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();

  return useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

// Contact Form Mutation
export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(data.name, data.email, data.phone, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
}

// Booking Form Mutation
export function useSubmitBookingForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      email: string;
      phone: string | null;
      eventType: string;
      eventDate: bigint | null;
      message: string;
      referenceFiles: ExternalBlob[];
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      
      // Generate unique ID for booking
      const id = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      return actor.submitBooking(
        id,
        data.fullName,
        data.email,
        data.phone,
        data.eventType,
        data.eventDate,
        data.message,
        data.referenceFiles
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookingSubmissions'] });
    },
  });
}

// Contact Submissions Query (for admin use)
export function useGetAllContactSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['contactSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

// Booking Submissions Query (for admin use)
export function useGetAllBookingSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<BookingSubmission[]>({
    queryKey: ['bookingSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookingSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
