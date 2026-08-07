import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/RNZ_logo.png"
            alt="RNZ Company"
            width={120}
            height={72}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-full px-5 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Accueil
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#05070d] transition-colors hover:bg-zinc-200"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
