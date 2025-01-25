export function DotsLoader({ className }: { className?: string }) {
  return (
    <div className={`flex animate-pulse space-x-2 ${className}`}>
      <div className="h-3 w-3 rounded-full bg-gray-300"></div>
      <div className="h-3 w-3 rounded-full bg-gray-300"></div>
      <div className="h-3 w-3 rounded-full bg-gray-300"></div>
    </div>
  );
}
