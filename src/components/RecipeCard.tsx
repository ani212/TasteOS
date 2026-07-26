import { Copy, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface RecipeCardProps {
  id: string;
  title: string;
  positioning: string;
  prompt: string;
  onUseRecipe: (id: string) => void;
}

export function RecipeCard({ id, title, positioning, prompt, onUseRecipe }: RecipeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-bg-main border border-border-subtle rounded-2xl overflow-hidden hover:border-border-strong transition-colors duration-200">
      <div className="p-6 border-b border-border-subtle bg-bg-secondary/50">
        <h3 className="font-serif text-2xl mb-1">{title}</h3>
        <p className="text-text-secondary">{positioning}</p>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="relative group flex-grow">
          <pre className="font-mono text-sm whitespace-pre-wrap bg-bg-secondary p-4 rounded-xl border border-border-subtle text-text-secondary overflow-hidden max-h-64 overflow-y-auto">
            {prompt}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 bg-bg-main border border-border-subtle rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bg-secondary"
            aria-label="Copy prompt"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        
        <div className="mt-6">
          <button
            onClick={() => onUseRecipe(id)}
            className="w-full py-3 px-4 bg-selection-bg text-selection-text rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span>Use this recipe</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
