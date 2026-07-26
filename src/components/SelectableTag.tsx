import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface SelectableTagProps {
  id: string;
  name: string;
  selected: boolean;
  onToggle: (id: string) => void;
}

export function SelectableTag({ id, name, selected, onToggle }: SelectableTagProps) {
  return (
    <button
      onClick={() => onToggle(id)}
      className={cn(
        "group relative flex items-center px-4 py-2 rounded-full border-2 transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "hover:-translate-y-0.5",
        selected 
          ? "bg-selection-bg text-selection-text border-transparent shadow-md ring-2 ring-accent ring-offset-1 ring-offset-bg-main" 
          : "bg-bg-secondary text-text-primary border-border-subtle hover:border-border-strong"
      )}
      aria-pressed={selected}
    >
      {selected && <Check className="w-4 h-4 mr-2" />}
      <span className="text-sm font-medium">{name}</span>
    </button>
  );
}
