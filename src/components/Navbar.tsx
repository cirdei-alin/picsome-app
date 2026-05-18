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
    <nav className="sticky top-0 z-50 flex gap-4 bg-black text-white p-4">
      <Link href="/" onClick={scrollToTop}>
        Home Page
      </Link>

      <Link href="/favorites" onClick={scrollToTop}>
        Favorites
      </Link>

      <Link href="/store" onClick={scrollToTop}>
        Store
      </Link>
    </nav>
  );
}