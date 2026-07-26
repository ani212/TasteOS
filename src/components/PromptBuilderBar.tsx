import { Copy, Eye, RotateCcw } from 'lucide-react';

interface PromptBuilderBarProps {
  selectionCount: number;
  onViewPrompt: () => void;
  onCopyPrompt: () => void;
  onReset: () => void;
}

export function PromptBuilderBar({ selectionCount, onViewPrompt, onCopyPrompt, onReset }: PromptBuilderBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none p-4 pb-safe flex justify-center">
      <div className="pointer-events-auto w-full max-w-4xl bg-bg-main border-2 border-border-strong rounded-2xl shadow-2xl p-4 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          <div className="bg-selection-bg text-selection-text w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-medium">
            {selectionCount}
          </div>
          <span className="font-medium hidden sm:block">
            {selectionCount === 1 ? 'Selection' : 'Selections'}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={onReset}
            className="p-2 md:px-4 md:py-2 text-text-secondary hover:text-red-600 transition-colors flex items-center gap-2"
            title="Reset all"
          >
            <RotateCcw className="w-5 h-5" />
            <span className="hidden md:block font-medium">Reset</span>
          </button>
          
          <button 
            onClick={onViewPrompt}
            className="p-2 md:px-4 md:py-2 bg-bg-secondary hover:bg-border-subtle text-text-primary rounded-xl transition-colors flex items-center gap-2 font-medium"
          >
            <Eye className="w-5 h-5" />
            <span className="hidden sm:block">View prompt</span>
            <span className="sm:hidden">Prompt</span>
          </button>
          
          <button 
            onClick={onCopyPrompt}
            className="p-2 md:px-6 md:py-2 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors flex items-center gap-2 font-medium"
          >
            <Copy className="w-5 h-5" />
            <span className="hidden sm:block">Copy</span>
          </button>
        </div>

      </div>
    </div>
  );
}
