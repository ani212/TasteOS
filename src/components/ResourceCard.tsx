import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  name: string;
  category: string;
  description: string;
  url: string;
}

export function ResourceCard({ name, category, description, url }: ResourceCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block p-6 bg-bg-secondary rounded-2xl border border-border-subtle hover:border-border-strong hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-serif text-xl">{name}</h3>
        <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all" />
      </div>
      <span className="inline-block px-2 py-1 bg-bg-main border border-border-subtle rounded text-xs font-mono mb-3">
        {category}
      </span>
      <p className="text-text-secondary text-sm">
        {description}
      </p>
    </a>
  );
}
