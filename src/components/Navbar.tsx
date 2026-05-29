"use client";

import Link from "next/link";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          onClick={scrollToTop}
          className="group flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-lg font-black shadow-lg shadow-fuchsia-500/25">
            P
          </span>

          <div>
            <p className="text-lg font-black tracking-tight text-white">
              PicSome
            </p>
            <p className="text-xs font-medium text-slate-400">
              premium gallery
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 shadow-2xl shadow-black/20">
          <Link
            href="/"
            onClick={scrollToTop}
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Gallery
          </Link>

          <Link
            href="/favorites"
            onClick={scrollToTop}
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Favorites
          </Link>

          <Link
            href="/store"
            onClick={scrollToTop}
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-fuchsia-200"
          >
            Store
          </Link>
        </div>
      </nav>
    </header>
  );
}