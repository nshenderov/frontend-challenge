import cls from './Tooltip.module.scss';

type TooltipProps = {
  children: React.ReactNode;
  tip: string;
};

export function Tooltip({ children, tip }: TooltipProps) {
  return (
    <div className={cls.tooltip}>
      {children}
      <span className={cls.tip}>{tip}</span>
    </div>
  );
}
