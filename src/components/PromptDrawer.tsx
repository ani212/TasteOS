import { Copy, X, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface PromptDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
  onPromptChange: (val: string) => void;
  onReset: () => void;
}

export function PromptDrawer({ isOpen, onClose, prompt, onPromptChange, onReset }: PromptDrawerProps) {
  const [copied, setCopied] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />
      
      <div className={cn(
        "fixed bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[80vw] max-w-5xl bg-bg-main border-t border-x border-border-strong rounded-t-3xl shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out",
        "h-[85vh] md:h-[75vh]"
      )}>
        <div className="flex justify-between items-center p-6 border-b border-border-subtle">
          <h2 className="font-serif text-2xl">Your design prompt</h2>
          <div className="flex gap-4 items-center">
            {showConfirmReset ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-600 font-medium">Are you sure?</span>
                <button 
                  onClick={() => {
                    onReset();
                    setShowConfirmReset(false);
                    onClose();
                  }}
                  className="text-sm px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Yes
                </button>
                <button 
                  onClick={() => setShowConfirmReset(false)}
                  className="text-sm px-3 py-1 bg-bg-secondary rounded-md"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowConfirmReset(true)}
                className="flex items-center gap-2 text-text-secondary hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">Reset</span>
              </button>
            )}
            
            <button 
              onClick={onClose}
              className="p-2 hover:bg-bg-secondary rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden">
          <p className="text-sm text-text-secondary">
            Feel free to edit this prompt before copying. It will not change your active selections.
          </p>
          <textarea
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            className="flex-1 w-full bg-bg-secondary p-6 rounded-2xl border border-border-subtle font-mono text-sm resize-none focus:outline-none focus:border-border-strong focus:ring-1 focus:ring-border-strong"
            placeholder="Your generated prompt will appear here..."
          />
        </div>

        <div className="p-6 border-t border-border-subtle bg-bg-main flex items-center justify-between">
          <div className="text-sm text-green-600 font-medium h-5">
            {copied && "Copied! Paste it into your AI builder."}
          </div>
          <button
            onClick={handleCopy}
            className="px-8 py-3 bg-selection-bg text-selection-text rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Copy className="w-5 h-5" />
            Copy Prompt
          </button>
        </div>
      </div>
    </>
  );
}
