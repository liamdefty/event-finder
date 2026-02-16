import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { eventService } from '../services/eventService';

export function useEvents(searchQuery: string) {
  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const fetchedEvents = await eventService.getEvents();
      return eventService.sortEventsByDate(fetchedEvents);
    },
  });

  const filteredEvents = useMemo(() => {
    return eventService.filterEvents(events, searchQuery);
  }, [events, searchQuery]);

  return {
    events: filteredEvents,
    isLoading,
  };
}
