'use client';

import Image from 'next/image';
import { useState } from 'react';

import { FavoriteIcon } from './FavoriteIcon';
import { Tooltip } from '../common/Tooltip';
import { CatData } from '@/types';
import { catsStorage } from '@/utils';

type CatCardProps = {
  cat: CatData;
  onRemoveCat?: (catId: string) => void;
};

export function CatCard({ cat, onRemoveCat = () => {} }: CatCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(() => !!catsStorage.getCat(cat.id));

  const handleClick = () => {
    if (isFavorite) {
      catsStorage.removeCat(cat.id);
      setIsFavorite(false);
      onRemoveCat(cat.id);
    } else {
      catsStorage.saveCat(cat);
      setIsFavorite(true);
    }
  };

  return (
    <figure
      className={`${isImageLoaded ? 'hover:scale-105 hover:shadow-mat' : ''} group/card relative
        flex h-[225px] w-[225px] transition-all duration-200`}
    >
      <div className={'flex h-full w-full animate-pulse items-center justify-center bg-gray-200'} />
      <Image
        fill
        src={cat.url}
        alt={`Cat ${cat.id}`}
        className={`${isImageLoaded ? '' : 'opacity-0'} object-cover`}
        onLoad={() => setIsImageLoaded(true)}
      />
      {isImageLoaded && (
        <div
          className="absolute bottom-4 right-4 cursor-pointer opacity-0 transition-opacity
            duration-200 group-hover/card:opacity-100"
          onClick={handleClick}
        >
          <Tooltip
            tooltip={isFavorite ? `Убрать котика\nиз любимых` : `Добавить котика\nв любимые`}
          >
            <FavoriteIcon isFavorite={isFavorite} />
          </Tooltip>
        </div>
      )}
    </figure>
  );
}
