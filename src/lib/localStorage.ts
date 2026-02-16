import type { Event } from '../types/event';

const STORAGE_KEY = 'event-finder-custom-events';

export function getCustomEvents(): Event[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveCustomEvent(event: Event): void {
  try {
    const existing = getCustomEvents();
    const updated = [...existing, event];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save event to localStorage:', error);
  }
}

export function clearCustomEvents(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear events from localStorage:', error);
  }
}
