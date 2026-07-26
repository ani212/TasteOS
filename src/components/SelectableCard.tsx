import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface SelectableCardProps {
  id: string;
  name: string;
  description?: string;
  examples?: string;
  selected: boolean;
  onToggle: (id: string) => void;
  preview?: ReactNode;
}

export function SelectableCard({ id, name, description, examples, selected, onToggle, preview }: SelectableCardProps) {
  return (
    <button
      onClick={() => onToggle(id)}
      className={cn(
        "group relative flex flex-col items-start w-full text-left p-6 rounded-2xl border transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "hover:-translate-y-1",
        selected 
          ? "bg-selection-bg text-selection-text border-transparent shadow-lg" 
          : "bg-bg-secondary text-text-primary border-border-subtle hover:border-border-strong hover:shadow-md"
      )}
      aria-pressed={selected}
    >
      <div className="absolute top-6 right-6 transition-opacity duration-200">
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center border",
          selected ? "bg-accent border-accent text-white" : "border-border-subtle text-transparent group-hover:border-border-strong"
        )}>
          <Check className="w-4 h-4" />
        </div>
      </div>
      
      {preview && (
        <div className="w-full h-32 mb-6 rounded-xl flex items-center justify-center overflow-hidden border border-border-subtle bg-bg-main relative">
           {preview}
        </div>
      )}
      
      <h3 className="font-serif text-xl font-medium mb-2 pr-8">{name}</h3>
      {description && <p className="text-sm opacity-80 mb-4">{description}</p>}
      
      {examples && (
        <div className="mt-auto pt-4 border-t border-current/10 w-full">
          <p className="text-xs font-mono opacity-70 uppercase tracking-wider">Similar to</p>
          <p className="text-sm mt-1">{examples}</p>
        </div>
      )}
    </button>
  );
}
