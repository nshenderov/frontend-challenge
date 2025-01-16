export function CatsMoreLoader({ ref }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div ref={ref} className="animate-pulse">
      ... загружаем еще котиков ...
    </div>
  );
}
