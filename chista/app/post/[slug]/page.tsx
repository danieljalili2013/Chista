import Header from "@/components/Header";
import { getPost, posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPost(slug);
  if (!post) return notFound();

  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <article className="rounded-3xl border bg-white overflow-hidden">
          <div className="aspect-[16/9] bg-zinc-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="text-xs text-zinc-500">
              {post.date} • {post.category}
            </div>

            <h1 className="mt-3 text-2xl md:text-4xl font-extrabold leading-tight">
              {post.title}
            </h1>

            <p className="mt-6 text-zinc-700 leading-9 whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </article>

        {/* RELATED */}
        <section className="mt-8">
          <h2 className="text-lg font-extrabold">مطالب مرتبط</h2>

          {related.length === 0 ? (
            <p className="mt-3 text-zinc-600">فعلاً مطلب مرتبطی نداریم.</p>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/post/${p.slug}`}
                  className="rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition block"
                >
                  <div className="aspect-[16/9] bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-zinc-500">{p.date}</div>
                    <div className="mt-1 font-bold leading-7">{p.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
