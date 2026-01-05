import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-extrabold">آخرین مطالب</h1>
        <p className="mt-3 text-zinc-600 leading-8">
          این صفحه بعداً مثل Geopop می‌شود: کارت‌ها، بخش‌ها، مطالب ویژه، و دسته‌بندی‌ها.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-zinc-500">2026-01-05</div>
            <div className="mt-1 font-bold">چرا زمین فصل دارد؟</div>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              فصل‌ها نتیجه‌ی کج بودن محور زمین و حرکت مداری آن هستند، نه فاصله از خورشید.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-zinc-500">2026-01-02</div>
            <div className="mt-1 font-bold">جاده ابریشم در ۱۰ دقیقه</div>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              شبکه‌ای از مسیرهای تجاری که شرق و غرب را به هم وصل کرد و فرهنگ‌ها را تغییر داد.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-zinc-500">2025-12-20</div>
            <div className="mt-1 font-bold">GPS دقیقاً چگونه کار می‌کند؟</div>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              ماهواره‌ها زمان را می‌فرستند و گوشی شما با اختلاف زمان، موقعیت را حساب می‌کند.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
