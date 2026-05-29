export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/70 px-5 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-black text-white">PicSome App</p>
          <p className="mt-1 text-sm text-slate-400">
            Premium visual gallery experience.
          </p>
        </div>

        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-400">
          © 2026 PicSome. Built with style.
        </p>
      </div>
    </footer>
  );
}