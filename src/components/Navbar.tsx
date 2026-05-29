"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Gallery",
    icon: "▦",
  },
  {
    href: "/favorites",
    label: "Favorites",
    icon: "♡",
  },
  {
    href: "/store",
    label: "Store",
    icon: "🛒",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-xl font-black text-white shadow-lg shadow-fuchsia-500/30">
            P
          </span>

          <div>
            <p className="text-xl font-black tracking-tight text-white">
              PicSome
            </p>
            <p className="mt-1 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-200">
              ASSIST Software
            </p>
          </div>
        </Link>

        <div className="grid grid-cols-3 gap-2 rounded-3xl border border-white/10 bg-white/5 p-1 shadow-2xl shadow-black/20 sm:flex sm:rounded-full">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollToTop}
                className={`rounded-2xl px-3 py-2 text-center text-sm font-bold transition sm:rounded-full sm:px-5 ${
                  isActive
                    ? "bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 text-white shadow-lg shadow-fuchsia-500/25 ring-1 ring-fuchsia-300/40"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}