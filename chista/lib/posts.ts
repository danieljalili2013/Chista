export type Category = "science" | "history" | "geo" | "tech";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string; // YYYY-MM-DD
  image: string;
  content: string; // for now plain text
};

export const posts: Post[] = [
  {
    slug: "why-earth-has-seasons",
    title: "چرا زمین فصل دارد؟",
    excerpt:
      "فصل‌ها نتیجه‌ی کج بودن محور زمین و حرکت مداری آن هستند، نه فاصله از خورشید.",
    category: "science",
    date: "2026-01-05",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=60",
    content:
      "اینجا متن کامل مقاله می‌آید. بعداً این قسمت را به Markdown/MDX تبدیل می‌کنیم تا مثل سایت‌های حرفه‌ای شود.",
  },
  {
    slug: "silk-road-in-10-min",
    title: "جاده ابریشم در ۱۰ دقیقه",
    excerpt:
      "شبکه‌ای از مسیرهای تجاری که شرق و غرب را به هم وصل کرد و فرهنگ‌ها را تغییر داد.",
    category: "history",
    date: "2026-01-02",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=60",
    content:
      "اینجا متن کامل مقاله می‌آید. می‌توانی پاراگراف‌ها، تیترها و عکس‌ها اضافه کنی.",
  },
  {
    slug: "how-gps-works",
    title: "GPS دقیقاً چگونه کار می‌کند؟",
    excerpt:
      "ماهواره‌ها زمان را می‌فرستند و گوشی شما با اختلاف زمان، موقعیت را حساب می‌کند.",
    category: "tech",
    date: "2025-12-20",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=60",
    content:
      "اینجا متن مقاله GPS می‌آید. بعداً عکس و ویدیو هم اضافه می‌کنیم.",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: Category) {
  return posts.filter((p) => p.category === category);
}
