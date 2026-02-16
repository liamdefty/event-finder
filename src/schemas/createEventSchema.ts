import { z } from 'zod';

export const createEventSchema = z.object({
  name: z.string().min(3, 'Event name must be at least 3 characters'),
  location: z.string().min(2, 'Location is required'),
  date: z.string().min(1, 'Date is required'),
  description: z.string().optional(),
});

export type CreateEventFormData = z.infer<typeof createEventSchema>;

export const createEventFieldConfig = {
  name: {
    label: 'Event Name',
    placeholder: 'React Conference 2026',
    type: 'text' as const,
  },
  location: {
    label: 'Location',
    placeholder: 'San Francisco, CA',
    type: 'text' as const,
  },
  date: {
    label: 'Event Date',
    type: 'datetime-local' as const,
  },
  description: {
    label: 'Description (Optional)',
    placeholder: 'Tell us about your event...',
    type: 'textarea' as const,
  },
} as const;
