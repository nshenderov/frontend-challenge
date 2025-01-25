import { type Ref, useEffect, useRef, useState } from 'react';

export function useElementInView<T extends Element = Element>(
  options: IntersectionObserverInit
): [Ref<T>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef<T | null>(null);

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
