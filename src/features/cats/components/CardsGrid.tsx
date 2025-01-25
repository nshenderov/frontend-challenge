export function CardsGrid({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="grid w-full grid-cols-[repeat(auto-fit,225px)] justify-center gap-[48px] p-[62px]"
    >
      {children}
    </section>
  );
}
