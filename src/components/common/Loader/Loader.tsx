import cls from './Loader.module.scss';

export function Loader({ text }: { text: string }) {
  return <div className={cls.loader}>... {text} ...</div>;
}
