import type { Event } from '../types/event';
import { formatEventDate } from '../utils/dateFormatter';
import { HighlightedText } from './HighlightedText';
import { Card, CardHeader, CardContent } from './ui/Card';
import { Heading, Text } from './ui/Typography';

interface EventCardProps {
  event: Event;
  searchQuery: string;
}

export function EventCard({ event, searchQuery }: EventCardProps) {
  return (
    <Card hoverable>
      <CardHeader>
        <Heading level={3}>
          <HighlightedText text={event.name} query={searchQuery} />
        </Heading>
      </CardHeader>
      <CardContent className="space-y-1">
        <Text variant="caption" className="flex items-center gap-2">
          <span className="font-medium">📍</span>
          <HighlightedText text={event.location} query={searchQuery} />
        </Text>
        <Text variant="caption" className="flex items-center gap-2">
          <span className="font-medium">📅</span>
          {formatEventDate(event.date)}
        </Text>
      </CardContent>
    </Card>
  );
}
