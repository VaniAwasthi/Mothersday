export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <div
        role="status"
        aria-label="Loading"
        className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50"
      />
    </div>
  );
}
