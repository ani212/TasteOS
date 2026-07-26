import { useState, useEffect } from 'react';

export function useIntersectionObserver(sectionIds: string[], offset = "-150px") {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const intersectingEntry = entries.find(entry => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveId(intersectingEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: `${offset} 0px -60% 0px`, // Adjust margin to trigger when section reaches top part
        threshold: 0
      }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
