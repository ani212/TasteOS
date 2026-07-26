import { useState, useEffect } from 'react';

export function useIntersectionObserver(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset + 100) { // 100px threshold
            currentId = id;
          }
        }
      }
      if (currentId) setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
