import { describe, it, expect } from 'vitest';
import { EventService } from './eventService';
import type { Event } from '../types/event';

describe('EventService', () => {
  const eventService = new EventService();

  const mockEvents: Event[] = [
    {
      id: '1',
      name: 'React Conference',
      location: 'Newcastle',
      date: '2026-03-15T10:00:00Z',
    },
    {
      id: '2',
      name: 'TypeScript Meetup',
      location: 'London',
      date: '2026-04-20T18:00:00Z',
    },
    {
      id: '3',
      name: 'JavaScript Workshop',
      location: 'Newcastle Upon Tyne',
      date: '2026-02-10T14:00:00Z',
    },
  ];

  describe('filterEvents', () => {
    it('should return all events when query is empty', () => {
      const result = eventService.filterEvents(mockEvents, '');
      expect(result).toEqual(mockEvents);
    });

    it('should return all events when query is whitespace', () => {
      const result = eventService.filterEvents(mockEvents, '   ');
      expect(result).toEqual(mockEvents);
    });

    it('should filter events by name', () => {
      const result = eventService.filterEvents(mockEvents, 'React');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('React Conference');
    });

    it('should filter events by location', () => {
      const result = eventService.filterEvents(mockEvents, 'Newcastle');
      expect(result).toHaveLength(2);
      expect(result.map((e) => e.id)).toEqual(['1', '3']);
    });

    it('should be case insensitive', () => {
      const result = eventService.filterEvents(mockEvents, 'TYPESCRIPT');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('TypeScript Meetup');
    });

    it('should match partial strings', () => {
      const result = eventService.filterEvents(mockEvents, 'Script');
      expect(result).toHaveLength(2);
      expect(result.map((e) => e.name)).toContain('TypeScript Meetup');
      expect(result.map((e) => e.name)).toContain('JavaScript Workshop');
    });

    it('should return empty array when no matches found', () => {
      const result = eventService.filterEvents(mockEvents, 'Python');
      expect(result).toHaveLength(0);
    });
  });

  describe('sortEventsByDate', () => {
    it('should sort events by date in ascending order', () => {
      const result = eventService.sortEventsByDate(mockEvents);
      expect(result[0].id).toBe('3');
      expect(result[1].id).toBe('1');
      expect(result[2].id).toBe('2');
    });

    it('should not mutate the original array', () => {
      const original = [...mockEvents];
      eventService.sortEventsByDate(mockEvents);
      expect(mockEvents).toEqual(original);
    });
  });
});
