export function CatsGrid({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="grid w-full grid-cols-[repeat(auto-fit,225px)] justify-center gap-12 p-[62px]"
    >
      {children}
    </section>
  );
}
