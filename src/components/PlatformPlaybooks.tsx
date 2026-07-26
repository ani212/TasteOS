import { playbooks } from '../data/playbooks';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export function PlatformPlaybooks() {
  const [openId, setOpenId] = useState<string>("antigravity");

  return (
    <div className="space-y-8 pt-12 border-t border-border-subtle" id="workflows">
      <div className="space-y-2">
        <span className="font-mono text-sm text-text-secondary">14</span>
        <h2 className="font-serif text-4xl">Platform Playbooks</h2>
        <p className="text-text-secondary text-lg">Step-by-step workflows for popular AI generators.</p>
      </div>

      <div className="space-y-4">
        {playbooks.map(playbook => {
          const isOpen = openId === playbook.id;
          return (
            <div 
              key={playbook.id} 
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors",
                playbook.featured && !isOpen ? "border-accent/40 bg-accent/5" : "border-border-subtle bg-bg-main",
                isOpen && playbook.featured ? "border-accent shadow-[0_0_20px_rgba(91,108,255,0.1)]" : "",
                isOpen && !playbook.featured ? "border-border-strong" : ""
              )}
            >
              <button 
                onClick={() => setOpenId(isOpen ? "" : playbook.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-secondary transition-colors"
              >
                <div className="flex items-center gap-4">
                  <h3 className="font-serif text-2xl">{playbook.name}</h3>
                  {playbook.featured && (
                    <span className="flex items-center gap-1 text-xs font-medium bg-accent text-white px-3 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>
                <ChevronDown className={cn("w-5 h-5 text-text-secondary transition-transform duration-300", isOpen && "rotate-180")} />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 border-t border-border-subtle">
                  <p className="text-text-secondary mb-6 mt-4 text-lg">{playbook.description}</p>
                  
                  <div className="space-y-4">
                    {playbook.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <span className="flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-bg-secondary border border-border-strong text-sm font-medium">
                          {idx + 1}
                        </span>
                        <p className="mt-1 text-text-primary">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
