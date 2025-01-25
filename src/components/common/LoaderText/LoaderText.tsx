import cls from './LoaderText.module.scss';

export function LoaderText({ text, className }: { text: string; className?: string }) {
  return <div className={`${cls.loader} ${className ? className : ''}`}>... {text} ...</div>;
}
