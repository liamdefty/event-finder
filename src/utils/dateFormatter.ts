import { format } from 'date-fns';

export function formatEventDate(isoDate: string): string {
  const date = new Date(isoDate);
  return format(date, "MMMM d, yyyy 'at' h:mm a");
}

export function formatEventDateShort(isoDate: string): string {
  const date = new Date(isoDate);
  return format(date, 'MMM d, yyyy');
}
