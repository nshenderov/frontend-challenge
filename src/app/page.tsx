import { AllCatsCatalog } from '@/features/cats';

export default function HomePage() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <AllCatsCatalog />
    </main>
  );
}
