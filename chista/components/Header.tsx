import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl">
          چیستا
        </Link>

        <nav className="flex gap-4 text-sm text-zinc-700">
          <Link href="/category/science" className="hover:opacity-70">
            علم
          </Link>
          <Link href="/category/history" className="hover:opacity-70">
            تاریخ
          </Link>
          <Link href="/category/geo" className="hover:opacity-70">
            جغرافیا
          </Link>
          <Link href="/category/tech" className="hover:opacity-70">
            تکنولوژی
          </Link>
        </nav>
      </div>
    </header>
  );
}
