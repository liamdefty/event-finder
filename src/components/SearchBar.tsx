import { SearchInput } from './ui/Input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-2xl">
      <SearchInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search events by name or location..."
        aria-label="Search events"
      />
    </div>
  );
}
