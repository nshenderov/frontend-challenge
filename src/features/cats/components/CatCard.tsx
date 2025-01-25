'use client';

import { useEffect, useState } from 'react';

import { Image, Tooltip } from '@/components';

import { catsStore } from '../store';
import { type CatData } from '../types';

type CatCardProps = {
  cat: CatData;
  onRemoveCat?: (catId: string) => void;
};

export function CatCard({ cat, onRemoveCat }: CatCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean | null>(null);

  useEffect(() => {
    setIsFavorite(catsStore.hasCat(cat.id));
  }, [cat.id]);

  const handleClick = () => {
    if (isFavorite) {
      catsStore.removeCat(cat.id);
      setIsFavorite(false);
      onRemoveCat?.(cat.id);
    } else {
      catsStore.saveCat(cat);
      setIsFavorite(true);
    }
  };

  return (
    <figure
      className={`${isImageLoaded ? 'hover:scale-105 hover:shadow-mat' : ''} group/card relative
        flex h-[225px] w-[225px] transition-all duration-200`}
    >
      <Image src={cat.url} alt={`Cat ${cat.id}`} onLoad={() => setIsImageLoaded(true)} />
      {isImageLoaded && (
        <div
          className="absolute bottom-4 right-4 cursor-pointer opacity-0 transition-opacity
            duration-200 group-hover/card:opacity-100"
          onClick={handleClick}
        >
          <FavoriteIcon isFavorite={!!isFavorite} />
        </div>
      )}
    </figure>
  );
}

function FavoriteIcon({ isFavorite }: { isFavorite: boolean }) {
  return (
    <Tooltip tooltip={isFavorite ? `Убрать котика\nиз любимых` : `Добавить котика\nв любимые`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <g>
          <path
            className={`${isFavorite ? 'fill-mat-red' : 'fill-mat-red-accent opacity-0'}
              transition-opacity duration-200 group-hover:opacity-100 group-active:fill-mat-red`}
            d="M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z"
          />
          <path
            className={`${isFavorite ? 'fill-mat-red' : 'fill-mat-red-accent'}
              group-active:fill-mat-red`}
            d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z"
          />
        </g>
      </svg>
    </Tooltip>
  );
}
