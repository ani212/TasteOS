import { Copy, Eye, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';

interface PromptBuilderBarProps {
  selectionCount: number;
  onViewPrompt: () => void;
  onCopyPrompt: () => void;
  onReset: () => void;
}

export function PromptBuilderBar({ selectionCount, onViewPrompt, onCopyPrompt, onReset }: PromptBuilderBarProps) {
  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 pointer-events-none p-4 pb-6 md:pb-8 flex justify-center transition-transform duration-500",
        selectionCount > 0 ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="pointer-events-auto w-full max-w-4xl bg-bg-main border-2 border-border-strong rounded-2xl shadow-2xl p-3 sm:p-4 flex items-center justify-between">
        
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-selection-bg text-selection-text w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-medium ring-2 ring-border-strong ring-offset-2 ring-offset-bg-main transition-colors">
            {selectionCount}
          </div>
          <span className="font-medium hidden sm:block text-sm sm:text-base">
            {selectionCount === 1 ? 'Selection' : 'Selections'}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={onReset}
            className="p-2 md:px-4 md:py-2 text-text-secondary hover:text-red-600 focus-visible:text-red-600 transition-colors flex items-center gap-2 rounded-xl"
            title="Reset all"
            aria-label="Reset selections"
          >
            <RotateCcw className="w-5 h-5" />
            <span className="hidden md:block font-medium">Reset</span>
          </button>
          
          <button 
            onClick={onViewPrompt}
            className="p-2 md:px-4 md:py-2 bg-bg-secondary hover:bg-border-subtle text-text-primary rounded-xl transition-colors flex items-center gap-2 font-medium"
            aria-label="View prompt"
          >
            <Eye className="w-5 h-5" />
            <span className="hidden sm:block">View prompt</span>
            <span className="sm:hidden text-sm">Prompt</span>
          </button>
          
          <button 
            onClick={onCopyPrompt}
            className="p-2 md:px-6 md:py-2 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors flex items-center gap-2 font-medium shadow-md"
            aria-label="Copy prompt"
          >
            <Copy className="w-5 h-5" />
            <span className="hidden sm:block">Copy</span>
          </button>
        </div>

      </div>
    </div>
  );
}
