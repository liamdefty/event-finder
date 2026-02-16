import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from './ui/Button';
import { Heading, Text } from './ui/Typography';
import { SchemaForm } from './SchemaForm';
import {
  createEventSchema,
  createEventFieldConfig,
} from '../schemas/createEventSchema';
import type { CreateEventFormData } from '../schemas/createEventSchema';
import { saveCustomEvent } from '../lib/localStorage';

export function CreateEventForm() {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = (data: CreateEventFormData) => {
    const newEvent = {
      id: `custom-${Date.now()}`,
      name: data.name,
      location: data.location,
      date: new Date(data.date).toISOString(),
    };

    saveCustomEvent(newEvent);
    queryClient.invalidateQueries({ queryKey: ['events'] });

    console.log('Event created:', newEvent);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button variant="ghost" onClick={() => setIsOpen(true)}>
        Create Event (Schema-Driven Demo)
      </Button>
    );
  }

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <Heading level={3}>Create New Event</Heading>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <SchemaForm
        schema={createEventSchema}
        fieldConfig={createEventFieldConfig}
        onSubmit={handleSubmit}
        onCancel={() => setIsOpen(false)}
        submitLabel="Create Event"
        defaultValues={{
          name: 'Radgie Gadgie React Meetup',
          location: 'The Baltic, Gateshead',
          date: '2026-06-15T19:00',
          description: 'A proper canny night of React talks and Newcastle Brown Ale',
        }}
      />

      <Text variant="muted" className="mt-4 italic">
        Note: This form is generated from a schema definition. The schema defines both
        validation rules and UI configuration.
      </Text>
    </div>
  );
}
