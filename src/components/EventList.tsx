import type { Event } from '../types/event';
import { EventCard } from './EventCard';
import { EmptyState } from './EmptyState';
import { Text } from './ui/Typography';

interface EventListProps {
  events: Event[];
  searchQuery: string;
  isLoading: boolean;
}

export function EventList({ events, searchQuery, isLoading }: EventListProps) {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <Text className="text-xl text-gray-500">Loading events...</Text>
      </div>
    );
  }

  if (events.length === 0) {
    return <EmptyState searchQuery={searchQuery} />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} searchQuery={searchQuery} />
      ))}
    </div>
  );
}
