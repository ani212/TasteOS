import { Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { skills } from '../data/skills';

export function SkillsDirectory() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 pt-12 border-t border-border-subtle" id="skills">
      <div className="space-y-2">
        <span className="font-mono text-sm text-text-secondary">13</span>
        <h2 className="font-serif text-4xl">Design Skills & Toolkit</h2>
        <p className="text-text-secondary text-lg">Extend your agent's capabilities with these specialized workflows.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map(skill => (
          <div key={skill.id} className="bg-bg-card border border-border-subtle rounded-2xl p-6 flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-bg-secondary text-text-secondary border border-border-subtle">
                    {skill.badge}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">by {skill.creator}</p>
              </div>
              <a 
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-bg-secondary rounded-full transition-colors text-text-secondary hover:text-text-primary"
                aria-label="External documentation"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
              {skill.description}
            </p>

            <div className="mt-auto bg-[#1C1C1A] dark:bg-[#0A0A09] rounded-xl p-4 flex items-center justify-between border border-[#2D2D2A]">
              <code className="font-mono text-sm text-[#E4E4DF]">{skill.command}</code>
              <button 
                onClick={() => handleCopy(skill.id, skill.command)}
                className="text-[#A8A8A1] hover:text-white transition-colors p-2 bg-white/5 rounded-lg"
                aria-label="Copy command"
              >
                {copiedId === skill.id ? <span className="text-xs px-1">Copied</span> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
