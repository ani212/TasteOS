import { Copy } from 'lucide-react';
import { useState } from 'react';

export function HowToPrompt() {
  const [copied, setCopied] = useState(false);
  const examplePrompt = `Design a responsive landing page for a modern fintech startup.

Use Minimalist as the dominant visual direction, supported by Editorial typography. Apply a Muted and dusty colour mood. Use Fraunces for headings and Inter for interface and body copy.

Structure the page using a Bento grid. Components should use soft 16px corners, diffused shadows, and outlined surfaces. Motion should feel smooth with 200ms transitions. Maintain balanced spacing.

Use abstract gradient shapes. The voice should feel premium and reserved.

Prioritise clear hierarchy and WCAG AA contrast. Avoid default purple gradients and heavy glassmorphism.

The result must be mobile-first and production-ready.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(examplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-16 pt-12 border-t border-border-subtle">
      <div className="space-y-2">
        <span className="font-mono text-sm text-text-secondary">12</span>
        <h2 className="font-serif text-4xl">How to Talk to AI</h2>
        <p className="text-text-secondary text-lg">A four-part educational framework for better generations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Framework Blocks */}
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <span className="font-serif text-3xl text-border-strong shrink-0">1</span>
            <div>
              <h3 className="font-medium text-xl mb-2">Context</h3>
              <p className="text-text-secondary">Define what you are building and for whom. AI needs to know the format (landing page, dashboard) and the audience to make intelligent structural assumptions.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="font-serif text-3xl text-border-strong shrink-0">2</span>
            <div>
              <h3 className="font-medium text-xl mb-2">Direction</h3>
              <p className="text-text-secondary">Provide specific visual vocabulary. Instead of "make it modern", say "use a neo-brutalist style with a high-contrast monochromatic palette."</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="font-serif text-3xl text-border-strong shrink-0">3</span>
            <div>
              <h3 className="font-medium text-xl mb-2">References</h3>
              <p className="text-text-secondary">If the tool supports vision (like Claude or ChatGPT), upload screenshots of interfaces you like. Tell the AI exactly what you like about the reference.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="font-serif text-3xl text-border-strong shrink-0">4</span>
            <div>
              <h3 className="font-medium text-xl mb-2">Constraints</h3>
              <p className="text-text-secondary">State what NOT to do. Establishing strict negative constraints ("avoid shadows, no emojis, no pure black") focuses the output significantly.</p>
            </div>
          </div>
        </div>

        {/* Example Prompt Box */}
        <div className="bg-[#1C1C1A] dark:bg-[#0A0A09] rounded-2xl p-6 border border-[#2D2D2A] flex flex-col h-full relative group">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <span className="font-mono text-sm text-[#A8A8A1]">Example Prompt</span>
            <button 
              onClick={handleCopy}
              className="text-[#A8A8A1] hover:text-white transition-colors flex items-center gap-2 text-sm bg-white/5 px-3 py-1.5 rounded-lg"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied' : 'Copy Example'}
            </button>
          </div>
          <pre className="font-mono text-[#E4E4DF] text-sm leading-relaxed whitespace-pre-wrap overflow-y-auto">
            {examplePrompt}
          </pre>
        </div>
      </div>

      <div className="space-y-6 pt-8">
        <h3 className="font-medium text-xl">Four Habits That Compound</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-bg-secondary p-6 rounded-2xl border border-border-subtle">
            <h4 className="font-medium mb-2">Change one variable</h4>
            <p className="text-sm text-text-secondary">When iterating, only change one instruction at a time so you know what affected the output.</p>
          </div>
          <div className="bg-bg-secondary p-6 rounded-2xl border border-border-subtle">
            <h4 className="font-medium mb-2">Ask for directions</h4>
            <p className="text-sm text-text-secondary">Ask the AI to generate 3 different visual directions first, then tell it which one to build.</p>
          </div>
          <div className="bg-bg-secondary p-6 rounded-2xl border border-border-subtle">
            <h4 className="font-medium mb-2">Build vocabulary</h4>
            <p className="text-sm text-text-secondary">When you see a design you like, figure out the technical terms for it (e.g. "bento grid", "glassmorphism").</p>
          </div>
          <div className="bg-bg-secondary p-6 rounded-2xl border border-border-subtle">
            <h4 className="font-medium mb-2">Save successes</h4>
            <p className="text-sm text-text-secondary">Keep a scratchpad of prompts that consistently yield great results for your specific tech stack.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
