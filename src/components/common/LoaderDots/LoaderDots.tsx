import cls from './LoaderDots.module.scss';

export function LoaderDots({ className }: { className?: string }) {
  return (
    <div className={`${cls.loader} ${className ? className : ''}`}>
      <div />
      <div />
      <div />
    </div>
  );
}
