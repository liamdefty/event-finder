import { Heading, Text } from './ui/Typography';

interface EmptyStateProps {
  searchQuery: string;
}

export function EmptyState({ searchQuery }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <Heading level={2} className="text-gray-500">
        No events found!
      </Heading>
      {searchQuery && (
        <Text variant="muted" className="mt-2">
          Try adjusting your search term: "{searchQuery}"
        </Text>
      )}
    </div>
  );
}
