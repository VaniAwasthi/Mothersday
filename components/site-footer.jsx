export function SiteFooter() {
  return (
    <footer className="w-full border-t border-black/[.08] py-6 dark:border-white/[.145]">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Mumma. All rights reserved.</p>
      </div>
    </footer>
  );
}
