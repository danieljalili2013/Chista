import Header from "@/components/Header";
import Link from "next/link";
import { getPostsByCategory, Category } from "@/lib/posts";
import { notFound } from "next/navigation";

const valid: Category[] = ["science", "history", "geo", "tech"];

const faNames: Record<Category, string> = {
  science: "علم",
  history: "تاریخ",
  geo: "جغرافیا",
  tech: "تکنولوژی",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slug as Category;

  if (!valid.includes(category)) return notFound();

  const items = getPostsByCategory(category).sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-extrabold">دسته: {faNames[category]}</h1>
        <p className="mt-2 text-zinc-600">{items.length} مطلب</p>

        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl border bg-white p-6 text-zinc-600">
            هنوز مطلبی برای این دسته نداریم.
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <Link
                key={p.slug}
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
            ))}
          </div>
        )}
      </main>
    </>
  );
}
