import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { EventList } from './components/EventList';
import { CreateEventForm } from './components/CreateEventForm';
import { useEvents } from './hooks/useEvents';
import { Page, Container } from './components/ui/Container';
import { Heading } from './components/ui/Typography';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const { events, isLoading } = useEvents(searchQuery);

  return (
    <Page>
      <Container>
        <header className="text-center mb-8">
          <Heading className="mb-2">Find Your Event</Heading>
        </header>

        <div className="flex flex-col items-center gap-6 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CreateEventForm />
        </div>

        <main>
          <EventList events={events} searchQuery={searchQuery} isLoading={isLoading} />
        </main>
      </Container>
    </Page>
  );
}

export default App;
