type TooltipProps = {
  children: React.ReactNode;
  tooltip: string;
};

export function Tooltip({ children, tooltip }: TooltipProps) {
  return (
    <div className="group relative">
      {children}
      <span
        className={`absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 transform
          whitespace-pre-wrap rounded bg-gray-700 px-2 py-1 text-center text-sm text-white opacity-0
          shadow-lg transition-opacity delay-700 duration-200 group-hover:opacity-100`}
      >
        {tooltip}
      </span>
    </div>
  );
}
