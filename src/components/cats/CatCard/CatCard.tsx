import { useEffect, useState } from 'react';

import { CatData } from '@/types';
import { favCatsIdb } from '@/store';
import { FavoriteIcon, Image, Tooltip } from '@/components';
import cls from './CatCard.module.scss';

type CatCardProps = {
  cat: CatData;
  onRemoveCat?: (catId: string) => void;
};

export function CatCard({ cat, onRemoveCat }: CatCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean | null>(null);

  useEffect(() => {
    favCatsIdb
      .hasCat(cat.id)
      .then(res => {
        setIsFavorite(res);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, [cat.id]);

  const handleClick = async () => {
    if (isFavorite) {
      try {
        await favCatsIdb.removeCat(cat.id);
        setIsFavorite(false);
        onRemoveCat?.(cat.id);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await favCatsIdb.saveCat(cat);
        setIsFavorite(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <figure className={`${cls['cat-card']} ${!isImageLoaded ? cls.loading : ''}`}>
      <Image
        src={cat.url}
        alt={`Cat ${cat.id}`}
        onLoad={() => {
          setIsImageLoaded(true);
        }}
      />

      {isImageLoaded && isFavorite !== null && (
        <div className={cls['favorite-icon-wrapper']} onClick={handleClick}>
          <Tooltip tip={isFavorite ? `Убрать котика\nиз любимых` : `Добавить котика\nв любимые`}>
            <FavoriteIcon isFavorite={isFavorite} />
          </Tooltip>
        </div>
      )}
    </figure>
  );
}
