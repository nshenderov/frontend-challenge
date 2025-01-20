import { useEffect, useRef, useState } from 'react';

import cls from './Image.module.scss';

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
    <div>
      <div className={cls.placeholder} />
      <img
        ref={imgRef}
        className={`${cls.image} ${!isLoaded ? cls.loading : ''}`}
        loading="lazy"
        src={src}
        alt={alt}
      />
    </div>
  );
}
