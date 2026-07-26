interface StylePreviewProps {
  type?: string;
}

export function StylePreview({ type }: StylePreviewProps) {
  if (!type) return null;
  
  switch (type) {
    case 'minimalist':
      return <div className="w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-sm" />;
    case 'swiss':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between border-t-[6px] border-l-[6px] border-red-600 bg-white">
          <div className="h-1.5 w-3/4 bg-black mb-1" />
          <div className="h-1.5 w-1/2 bg-black" />
          <div className="mt-auto flex justify-end">
             <div className="w-8 h-8 rounded-full bg-red-600" />
          </div>
        </div>
      );
    case 'neobrutalism':
      return (
        <div className="w-20 h-12 bg-[#B1FF5B] border-4 border-black transition-transform" style={{ boxShadow: '6px 6px 0 0 #000' }}>
          <div className="h-full w-full flex items-center justify-center font-mono font-bold text-black text-xs uppercase tracking-widest">BTN</div>
        </div>
      );
    case 'glassmorphism':
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-4">
          <div className="w-3/4 h-3/4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/50 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      );
    case 'terminal':
      return (
        <div className="w-full h-full bg-black p-4 font-mono text-xs text-green-500 leading-relaxed flex flex-col justify-end">
          <div>$ init style --dark</div>
          <div className="animate-pulse">_</div>
        </div>
      );
    case 'editorial':
      return (
        <div className="w-full h-full bg-[#f4ebd0] p-5 flex flex-col">
          <div className="border-b border-black pb-1.5 mb-3">
            <h1 className="font-serif text-2xl leading-none text-black tracking-tight">The Edit</h1>
          </div>
          <div className="flex gap-3">
            <div className="w-1/3 h-12 bg-black/10 mix-blend-multiply" />
            <div className="flex-1 flex flex-col gap-1.5 mt-1">
              <div className="h-1 w-full bg-black/60" />
              <div className="h-1 w-5/6 bg-black/60" />
              <div className="h-1 w-4/6 bg-black/60" />
            </div>
          </div>
        </div>
      );
    case 'bauhaus':
      return (
        <div className="w-full h-full bg-[#E5DCC5] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-20 h-20 bg-[#D83121] rounded-full -top-6 -left-6 mix-blend-multiply" />
          <div className="absolute w-16 h-16 bg-[#2D56A0] -bottom-4 right-4 mix-blend-multiply" />
          <div className="absolute w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[41.6px] border-[#F2C029] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />
        </div>
      );
    case 'y2k':
      return (
        <div className="w-full h-full bg-black flex items-center justify-center p-4 overflow-hidden relative">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#fff_1px,_transparent_1px)] bg-[length:20px_20px]" />
          <div className="text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-400 to-zinc-900 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] relative z-10">
            CYBER
          </div>
        </div>
      );
    case 'light':
      return <div className="w-full h-full bg-white border border-gray-100" />;
    case 'dark':
      return <div className="w-full h-full bg-zinc-950 border border-zinc-800" />;
    case 'warm':
      return <div className="w-full h-full bg-[#F3EEDC] border border-[#BDB5A2]" />;
    case 'contrast':
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-black" />
          <div className="flex-1 bg-white" />
        </div>
      );
    case 'sunset':
      return <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-500 to-purple-600" />;
    case 'aurora':
      return <div className="w-full h-full bg-gradient-to-tr from-emerald-300 via-cyan-400 to-indigo-500 opacity-80 mix-blend-multiply" />;
    case 'ocean':
      return <div className="w-full h-full bg-gradient-to-b from-cyan-400 to-blue-700" />;
    case 'bento':
      return (
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-1.5 p-3 bg-zinc-100 dark:bg-zinc-800">
          <div className="col-span-2 row-span-2 bg-white dark:bg-zinc-700 rounded-sm" />
          <div className="col-span-1 row-span-1 bg-white dark:bg-zinc-700 rounded-sm" />
          <div className="col-span-1 row-span-2 bg-white dark:bg-zinc-700 rounded-sm" />
          <div className="col-span-1 row-span-1 bg-white dark:bg-zinc-700 rounded-sm" />
          <div className="col-span-1 row-span-1 bg-white dark:bg-zinc-700 rounded-sm" />
        </div>
      );
    case 'single':
      return (
        <div className="w-full h-full flex flex-col items-center p-3 gap-2 bg-zinc-100 dark:bg-zinc-800">
          <div className="w-3/4 h-8 bg-white dark:bg-zinc-700 rounded-sm" />
          <div className="w-3/4 h-24 bg-white dark:bg-zinc-700 rounded-sm" />
        </div>
      );
    case 'split':
      return (
        <div className="w-full h-full flex bg-zinc-100 dark:bg-zinc-800">
          <div className="flex-1 border-r border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 p-4" />
          <div className="flex-1 bg-zinc-50 dark:bg-zinc-800 p-4" />
        </div>
      );
    case 'sidebar':
      return (
        <div className="w-full h-full flex bg-zinc-100 dark:bg-zinc-800">
          <div className="w-1/4 h-full bg-white dark:bg-zinc-700 border-r border-zinc-200 dark:border-zinc-600" />
          <div className="flex-1 p-3">
             <div className="w-full h-full bg-white dark:bg-zinc-700 rounded-sm shadow-sm" />
          </div>
        </div>
      );
    default:
      return null;
  }
}
