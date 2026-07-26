import { useState, useEffect } from 'react';
import { BookOpen, Moon, Sun, PenTool } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
import { useLocalStorage } from './hooks/useLocalStorage';
import { usePromptGenerator } from './hooks/usePromptGenerator';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { cn } from './lib/utils';

import { buildTypes } from './data/buildTypes';
import { styles } from './data/styles';
import { colors } from './data/colors';
import { typography } from './data/typography';
import { themes } from './data/themes';
import { layouts } from './data/layouts';
import { components } from './data/components';
import { motion } from './data/motion';
import { spacing } from './data/spacing';
import { imagery } from './data/imagery';
import { voice } from './data/voice';
import { recipes } from './data/recipes';
import { resources } from './data/resources';
import { glossary } from './data/glossary';

import { SelectableCard } from './components/SelectableCard';
import { SelectableTag } from './components/SelectableTag';
import { StylePreview } from './components/StylePreview';
import { RecipeCard } from './components/RecipeCard';
import { ResourceCard } from './components/ResourceCard';
import { PromptBuilderBar } from './components/PromptBuilderBar';
import { PromptDrawer } from './components/PromptDrawer';
import { KeywordMarquee } from './components/KeywordMarquee';
import { HowToPrompt } from './components/HowToPrompt';
import { SkillsDirectory } from './components/SkillsDirectory';
import { PlatformPlaybooks } from './components/PlatformPlaybooks';

const SECTIONS = [
  { id: 'start', title: 'Start' },
  { id: 'styles', title: 'Styles' },
  { id: 'color', title: 'Color' },
  { id: 'type', title: 'Type' },
  { id: 'themes', title: 'Themes' },
  { id: 'layout', title: 'Layout' },
  { id: 'details', title: 'Details' },
  { id: 'motion', title: 'Motion' },
  { id: 'space', title: 'Space' },
  { id: 'imagery', title: 'Imagery' },
  { id: 'voice', title: 'Voice' },
  { id: 'recipes', title: 'Recipes' },
  { id: 'prompting', title: 'Prompting' },
  { id: 'skills', title: 'Skills' },
  { id: 'workflows', title: 'Workflows' },
  { id: 'inspiration', title: 'Inspiration' },
  { id: 'glossary', title: 'Glossary' }
];

export default function App() {
  const [selectedIds, setSelectedIds] = useLocalStorage<string[]>('pdd-selections', []);
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('pdd-theme', 'light');
  const [promptDrawerOpen, setPromptDrawerOpen] = useState(false);
  
  const generatedPrompt = usePromptGenerator(selectedIds);
  const [editedPrompt, setEditedPrompt] = useState('');

  const activeSectionId = useIntersectionObserver(SECTIONS.map(s => s.id));

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Update edited prompt when selections change and drawer is closed
  useEffect(() => {
    if (!promptDrawerOpen) {
      setEditedPrompt(generatedPrompt);
    }
  }, [generatedPrompt, promptDrawerOpen]);

  const toggleSelection = (id: string, category: string, limit?: number) => {
    setSelectedIds(prev => {
      const isSelected = prev.includes(id);
      
      if (isSelected) {
        return prev.filter(i => i !== id);
      }
      
      // Handle limits
      if (limit === 1) {
        const categoryIds = getOptionsByCategory(category).map(o => o.id);
        const prevWithoutCategory = prev.filter(i => !categoryIds.includes(i));
        return [...prevWithoutCategory, id];
      } else if (limit) {
        const categoryIds = getOptionsByCategory(category).map(o => o.id);
        const selectedInCategory = prev.filter(i => categoryIds.includes(i));
        if (selectedInCategory.length >= limit) {
          // Replace oldest if at limit
          const prevWithoutOldest = prev.filter(i => i !== selectedInCategory[0]);
          return [...prevWithoutOldest, id];
        }
      }
      
      return [...prev, id];
    });
  };

  const getOptionsByCategory = (category: string) => {
    const all = [...buildTypes, ...styles, ...colors, ...typography, ...themes, ...layouts, ...components, ...motion, ...spacing, ...imagery, ...voice];
    return all.filter(o => o.category === category);
  };

  const handleReset = () => {
    setSelectedIds([]);
  };

  const [ariaMessage, setAriaMessage] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setAriaMessage('Prompt copied to clipboard');
    setTimeout(() => setAriaMessage(''), 3000);
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Primary Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-border-subtle bg-bg-main relative z-20">
        <div className="flex items-center gap-2 font-serif text-xl font-medium tracking-tight">
          <BookOpen className="w-5 h-5 text-accent" />
          TasteOS
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#recipes" className="hover:text-accent transition-colors">Recipes</a>
          <a href="#inspiration" className="hover:text-accent transition-colors">Inspiration</a>
          <a href="#glossary" className="hover:text-accent transition-colors">Glossary</a>
          <div className="h-4 w-[1px] bg-border-subtle mx-2" />
          <a 
            href="https://github.com/ani212/TasteOS" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-text-primary text-text-secondary transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative inline-flex h-7 w-12 items-center rounded-full bg-border-subtle hover:bg-border-strong transition-colors ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label="Toggle dark mode"
          >
            <span className="sr-only">Toggle dark mode</span>
            <span
              className={cn(
                "inline-block h-5 w-5 transform rounded-full bg-bg-main transition duration-200 ease-in-out flex items-center justify-center",
                theme === 'dark' ? "translate-x-6" : "translate-x-1"
              )}
            >
              {theme === 'dark' ? <Moon className="w-3 h-3 text-text-primary" /> : <Sun className="w-3 h-3 text-text-primary" />}
            </span>
          </button>
        </div>
        
        <div className="flex md:hidden items-center gap-4">
          <a 
            href="https://github.com/ani212/TasteOS" 
            target="_blank" 
            rel="noreferrer"
            className="text-text-secondary"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full bg-bg-secondary"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-10 bg-bg-main/80 backdrop-blur-md border-b border-border-subtle shadow-sm overflow-x-auto no-scrollbar">
        <ul className="flex items-center px-4 py-3 min-w-max gap-1">
          {SECTIONS.map(section => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                  activeSectionId === section.id 
                    ? "bg-selection-bg text-selection-text" 
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="max-w-[1240px] mx-auto px-6 sm:px-12 py-16 md:py-24 space-y-32 md:space-y-48">
        
        {/* Hero Section */}
        <section id="start" className="max-w-4xl pt-12 md:pt-20">
          <p className="font-mono text-sm uppercase tracking-widest text-accent font-bold mb-6">
            TASTEOS · GOOD TASTE ON DEMAND
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-balance">
            You do not lack taste. <br className="hidden md:block"/>
            <span className="text-text-secondary italic ml-0 md:ml-12">You lack the vocabulary.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 mt-16">
            <div className="flex-1 space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                We often recognize good design instantly, but struggle to describe it to AI website builders and development tools. Vague prompts create generic outputs.
              </p>
              <p>
                This dictionary provides the precise design vocabulary, examples, tools, and recipes to help you construct a comprehensive, professional visual direction.
              </p>
            </div>
            
            <div className="flex-1">
              <blockquote className="p-8 border-l-4 border-border-strong bg-bg-secondary rounded-r-2xl font-serif text-2xl leading-relaxed text-text-primary">
                "Good taste comes from exposure, vocabulary, and deliberate practice."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 3 Steps */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border-subtle py-16">
          <div className="space-y-4">
            <div className="font-serif text-5xl text-border-subtle">01</div>
            <h3 className="font-medium text-xl">Choose what you like</h3>
            <p className="text-text-secondary">Browse the dictionary and select the aesthetic elements that match your vision.</p>
          </div>
          <div className="space-y-4">
            <div className="font-serif text-5xl text-border-subtle">02</div>
            <h3 className="font-medium text-xl">Build your direction</h3>
            <p className="text-text-secondary">Your selections automatically combine into a comprehensive natural language prompt.</p>
          </div>
          <div className="space-y-4">
            <div className="font-serif text-5xl text-border-subtle">03</div>
            <h3 className="font-medium text-xl">Copy the prompt</h3>
            <p className="text-text-secondary">Paste your prompt into AI tools like v0, Lovable, or Google Antigravity to generate your site.</p>
          </div>
        </section>

        {/* Rule Callout */}
        <section className="bg-bg-secondary border border-border-strong rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-6">
            <div className="bg-accent text-white p-3 rounded-xl shrink-0 mt-1">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-3xl mb-4">One rule before you begin</h3>
              <p className="text-xl text-text-secondary leading-relaxed max-w-3xl text-balance">
                Choose <strong className="text-text-primary font-medium">one</strong> dominant style, <strong className="text-text-primary font-medium">one</strong> colour mood, and <strong className="text-text-primary font-medium">one or two</strong> typefaces. Too many competing choices create visual noise.
              </p>
            </div>
          </div>
        </section>

      </main>

      <KeywordMarquee />

      <main className="max-w-[1240px] mx-auto px-6 sm:px-12 py-16 md:py-24 space-y-32 md:space-y-48">
        
        {/* 00 - What are you building? */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">00</span>
            <h2 className="font-serif text-4xl">What are you building?</h2>
            <p className="text-text-secondary text-lg">Define the core format of your project.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {buildTypes.map(opt => (
              <SelectableTag
                key={opt.id}
                id={opt.id}
                name={opt.name}
                selected={selectedIds.includes(opt.id)}
                onToggle={(id) => toggleSelection(id, opt.category, 1)}
              />
            ))}
          </div>
        </section>

        {/* 01 - Styles */}
        <section id="styles" className="space-y-8 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">01</span>
            <h2 className="font-serif text-4xl">Design Styles</h2>
            <p className="text-text-secondary text-lg">Choose a primary and optional secondary visual direction.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map(opt => (
              <SelectableCard
                key={opt.id}
                id={opt.id}
                name={opt.name}
                description={opt.description}
                examples={opt.examples}
                preview={<StylePreview type={opt.previewType} />}
                selected={selectedIds.includes(opt.id)}
                onToggle={(id) => toggleSelection(id, opt.category, 2)}
              />
            ))}
          </div>
        </section>

        {/* 02 - Color */}
        <section id="color" className="space-y-16 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">02</span>
            <h2 className="font-serif text-4xl">Color</h2>
            <p className="text-text-secondary text-lg">Establish the chromatic mood.</p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-xl">Palette Moods</h3>
            <div className="flex flex-wrap gap-3">
              {colors.filter(c => c.category === 'colorMood').map(opt => (
                <SelectableTag
                  key={opt.id}
                  id={opt.id}
                  name={opt.name}
                  selected={selectedIds.includes(opt.id)}
                  onToggle={(id) => toggleSelection(id, opt.category, 2)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-medium text-xl">Gradients</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {colors.filter(c => c.category === 'colorGradient').map(opt => (
                <SelectableCard
                  key={opt.id}
                  id={opt.id}
                  name={opt.name}
                  preview={<StylePreview type={opt.previewType} />}
                  selected={selectedIds.includes(opt.id)}
                  onToggle={(id) => toggleSelection(id, opt.category, 1)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-medium text-xl">Color Vocabulary</h3>
            <div className="flex flex-wrap gap-3">
              {colors.filter(c => c.category === 'colorVocab').map(opt => (
                <SelectableTag
                  key={opt.id}
                  id={opt.id}
                  name={opt.name}
                  selected={selectedIds.includes(opt.id)}
                  onToggle={(id) => toggleSelection(id, opt.category)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 03 - Typography */}
        <section id="type" className="space-y-16 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">03</span>
            <h2 className="font-serif text-4xl">Typography</h2>
            <p className="text-text-secondary text-lg">Select up to two typographic voices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {typography.filter(t => t.category === 'typography').map(opt => (
              <SelectableCard
                key={opt.id}
                id={opt.id}
                name={opt.name}
                description={opt.description}
                examples={opt.examples}
                selected={selectedIds.includes(opt.id)}
                onToggle={(id) => toggleSelection(id, opt.category, 2)}
                preview={
                  <div className="w-full h-full flex items-center justify-center">
                     <span className={cn(
                       "text-6xl text-black",
                       opt.id === 'ty-grotesque' && "font-sans font-medium tracking-tight",
                       opt.id === 'ty-geometric' && "font-sans font-light",
                       opt.id === 'ty-expressive' && "font-serif italic",
                       opt.id === 'ty-mono' && "font-mono font-medium tracking-tight"
                     )}>Ag</span>
                  </div>
                }
              />
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-xl">Type Styling</h3>
            <div className="flex flex-wrap gap-3">
              {typography.filter(t => t.category === 'typeVocab').map(opt => (
                <SelectableTag
                  key={opt.id}
                  id={opt.id}
                  name={opt.name}
                  selected={selectedIds.includes(opt.id)}
                  onToggle={(id) => toggleSelection(id, opt.category)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 04 - Themes */}
        <section id="themes" className="space-y-8 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">04</span>
            <h2 className="font-serif text-4xl">Themes and Mood</h2>
            <p className="text-text-secondary text-lg">Define the environmental backdrop.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map(opt => (
              <SelectableCard
                key={opt.id}
                id={opt.id}
                name={opt.name}
                preview={<StylePreview type={opt.previewType} />}
                selected={selectedIds.includes(opt.id)}
                onToggle={(id) => toggleSelection(id, opt.category, 1)}
              />
            ))}
          </div>
        </section>

        {/* 05 - Layout */}
        <section id="layout" className="space-y-8 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">05</span>
            <h2 className="font-serif text-4xl">Layout</h2>
            <p className="text-text-secondary text-lg">Determine the structural composition.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {layouts.map(opt => (
              <SelectableCard
                key={opt.id}
                id={opt.id}
                name={opt.name}
                preview={<StylePreview type={opt.previewType} />}
                selected={selectedIds.includes(opt.id)}
                onToggle={(id) => toggleSelection(id, opt.category, 1)}
              />
            ))}
          </div>
        </section>

        {/* 06 - Details */}
        <section id="details" className="space-y-16 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">06</span>
            <h2 className="font-serif text-4xl">Details and Components</h2>
            <p className="text-text-secondary text-lg">Fine-tune the interface elements.</p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-xl">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              {components.filter(c => c.category === 'button').map(opt => (
                <SelectableTag key={opt.id} id={opt.id} name={opt.name} selected={selectedIds.includes(opt.id)} onToggle={(id) => toggleSelection(id, opt.category, 1)} />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-xl">Corners</h3>
            <div className="flex flex-wrap gap-3">
              {components.filter(c => c.category === 'corner').map(opt => (
                <SelectableTag key={opt.id} id={opt.id} name={opt.name} selected={selectedIds.includes(opt.id)} onToggle={(id) => toggleSelection(id, opt.category, 1)} />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-xl">Shadows</h3>
            <div className="flex flex-wrap gap-3">
              {components.filter(c => c.category === 'shadow').map(opt => (
                <SelectableTag key={opt.id} id={opt.id} name={opt.name} selected={selectedIds.includes(opt.id)} onToggle={(id) => toggleSelection(id, opt.category, 1)} />
              ))}
            </div>
          </div>
        </section>

        {/* 07, 08, 09, 10 - Compact sections */}
        {[
          { id: 'motion', num: '07', title: 'Motion and Feel', data: motion, limit: 1 },
          { id: 'space', num: '08', title: 'Density and Spacing', data: spacing, limit: 1 },
          { id: 'imagery', num: '09', title: 'Imagery and Graphics', data: imagery, limit: 1 },
          { id: 'voice', num: '10', title: 'Voice and Microcopy', data: voice, limit: 0 }
        ].map(section => (
          <section key={section.id} id={section.id} className="space-y-8 pt-12 border-t border-border-subtle">
            <div className="space-y-2">
              <span className="font-mono text-sm text-text-secondary">{section.num}</span>
              <h2 className="font-serif text-4xl">{section.title}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {section.data.map(opt => (
                <SelectableTag 
                  key={opt.id} 
                  id={opt.id} 
                  name={opt.name} 
                  selected={selectedIds.includes(opt.id)} 
                  onToggle={(id) => toggleSelection(id, opt.category, section.limit || undefined)} 
                />
              ))}
            </div>
          </section>
        ))}

        {/* 11 - Recipes */}
        <section id="recipes" className="space-y-8 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">11</span>
            <h2 className="font-serif text-4xl">Ready-Made Recipes</h2>
            <p className="text-text-secondary text-lg">Complete, cohesive design directions ready to copy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recipes.map(recipe => (
              <RecipeCard 
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                positioning={recipe.positioning}
                prompt={recipe.prompt}
                onUseRecipe={() => {
                  if (confirm("This will clear your current selections. Proceed?")) {
                    setSelectedIds([]);
                    setEditedPrompt(recipe.prompt);
                    setPromptDrawerOpen(true);
                  }
                }}
              />
            ))}
          </div>
        </section>

        <div id="prompting">
          <HowToPrompt />
        </div>

        <SkillsDirectory />
        <PlatformPlaybooks />

        {/* 15 - Inspiration */}
        <section id="inspiration" className="space-y-8 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">15</span>
            <h2 className="font-serif text-4xl">Inspiration Library</h2>
            <p className="text-text-secondary text-lg">Where to find good references.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <ResourceCard 
                key={i}
                name={res.name}
                category={res.category}
                description={res.description}
                url={res.url}
              />
            ))}
          </div>
        </section>

        {/* 16 - Glossary */}
        <section id="glossary" className="space-y-8 pt-12 border-t border-border-subtle">
          <div className="space-y-2">
            <span className="font-mono text-sm text-text-secondary">16</span>
            <h2 className="font-serif text-4xl">Design Glossary</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {glossary.map((item, i) => (
              <div key={i} className="border-b border-border-subtle pb-4">
                <h4 className="font-serif text-xl mb-2">{item.term}</h4>
                <p className="text-text-secondary leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-24 space-y-6">
          <h2 className="font-serif text-5xl">Good design vocabulary, on demand.</h2>
          <p className="text-xl text-text-secondary">Build one thoughtful screen today.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-secondary border-t border-border-subtle py-16 px-6 pb-32 md:pb-40">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="font-serif text-xl font-medium">TasteOS</div>
            <p className="text-text-secondary max-w-md">
              A comprehensive interactive design-reference website helping creators describe the visual direction of their products.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Guides</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-strong rounded transition-colors">How to talk to AI</a></li>
              <li><a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-strong rounded transition-colors">Platform playbooks</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-strong rounded transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-strong rounded transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-strong rounded transition-colors">Built with React & Tailwind</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div aria-live="polite" className="sr-only">
         {ariaMessage}
      </div>

      <PromptBuilderBar 
        selectionCount={selectedIds.length}
        onViewPrompt={() => {
          setEditedPrompt(generatedPrompt);
          setPromptDrawerOpen(true);
        }}
        onCopyPrompt={() => {
          copyToClipboard(generatedPrompt);
          alert("Prompt copied to clipboard!");
        }}
        onReset={handleReset}
      />

      <PromptDrawer 
        isOpen={promptDrawerOpen}
        onClose={() => setPromptDrawerOpen(false)}
        prompt={editedPrompt}
        onPromptChange={setEditedPrompt}
        onReset={handleReset}
      />
    </div>
  );
}
