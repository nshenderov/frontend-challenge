import { useEffect, useRef, useState } from 'react';

export function useElementInView(options: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    const current = targetRef.current;

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [options]);

  return [targetRef, isInView];
}
