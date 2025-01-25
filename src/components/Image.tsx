'use client';

import { useEffect, useRef, useState } from 'react';

type ImageProps = {
  src: string;
  alt: string;
  onLoad?: () => void;
};

export function Image({ src, alt, onLoad }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = () => {
        setIsLoaded(true);
        onLoad?.();
      };
    }
  }, [imgRef, onLoad]);

  return (
    <picture>
      <div className={`absolute h-full w-full bg-gray-200 ${!isLoaded ? 'animate-pulse' : ''}`} />
      <img
        ref={imgRef}
        className={`absolute block h-full w-full object-cover transition-opacity duration-200
          ${!isLoaded ? 'opacity-0' : ''}`}
        loading="lazy"
        src={src}
        alt={alt}
      />
    </picture>
  );
}
