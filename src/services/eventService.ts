import type { Event } from '../types/event';
import { events as mockEvents } from '../data/events';
import { getCustomEvents } from '../lib/localStorage';

export class EventService {
  async getEvents(): Promise<Event[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const customEvents = getCustomEvents();
        const allEvents = [...mockEvents, ...customEvents];
        resolve(allEvents);
      }, 100);
    });
  }

  filterEvents(events: Event[], query: string): Event[] {
    if (!query.trim()) {
      return events;
    }

    const lowerQuery = query.toLowerCase();
    return events.filter(
      (event) =>
        event.name.toLowerCase().includes(lowerQuery) ||
        event.location.toLowerCase().includes(lowerQuery)
    );
  }

  sortEventsByDate(events: Event[]): Event[] {
    return [...events].sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
}

export const eventService = new EventService();
