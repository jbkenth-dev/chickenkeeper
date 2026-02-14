export function CardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[2.5rem] bg-card p-4 shadow-sm border border-foreground/5 relative">
      <div className="relative aspect-[4/5] w-full animate-pulse rounded-[2rem] bg-foreground/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-2 w-16 animate-pulse rounded bg-foreground/10" />
            <div className="h-6 w-32 animate-pulse rounded bg-foreground/10" />
          </div>
          <div className="h-6 w-16 animate-pulse rounded bg-foreground/10" />
        </div>
        <div className="mt-8">
          <div className="h-12 w-full animate-pulse rounded-2xl bg-foreground/10" />
        </div>
      </div>
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 w-full animate-pulse rounded-lg bg-foreground/10"
          style={{ width: i === lines - 1 ? '70%' : '100%' }}
        />
      ))}
    </div>
  );
}
