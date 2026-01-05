import Header from "@/components/Header";
import Link from "next/link";
import { posts } from "@/lib/posts";

function Card({ p }: { p: (typeof posts)[number] }) {
  return (
    <Link
      href={`/post/${p.slug}`}
      className="rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition block"
    >
      <div className="aspect-[16/9] bg-zinc-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
      </div>

      <div className="p-4">
        <div className="text-xs text-zinc-500">{p.date}</div>
        <div className="mt-1 font-bold">{p.title}</div>
        <p className="mt-2 text-sm text-zinc-600 leading-7">{p.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const hero = latest[0];
  const rest = latest.slice(1);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="rounded-3xl border bg-white overflow-hidden">
          <div className="aspect-[16/9] bg-zinc-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.image} alt={hero.title} className="h-full w-full object-cover" />
          </div>

          <div className="p-6">
            <div className="text-xs text-zinc-500">ویژه • {hero.date}</div>
            <Link href={`/post/${hero.slug}`} className="block mt-2">
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                {hero.title}
              </h1>
              <p className="mt-3 text-zinc-600 leading-8">{hero.excerpt}</p>
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-extrabold">آخرین مطالب</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
