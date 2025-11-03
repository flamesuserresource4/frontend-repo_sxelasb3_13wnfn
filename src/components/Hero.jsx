import { Download, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#dbeafe,transparent_40%),radial-gradient(circle_at_80%_0%,#fee2e2,transparent_35%),radial-gradient(circle_at_60%_80%,#dcfce7,transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium">
              <Star className="h-3.5 w-3.5" /> New drops weekly
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight ">
              Premium digital products for creators
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Download-ready assets: UI kits, icons, templates, music and more. Instant access after purchase.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800">
                <Download className="h-5 w-5" /> Browse products
              </a>
              <a href="#features" className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">
                Why choose us
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> 4.9/5 average rating</div>
              <div>Instant downloads</div>
              <div>Commercial licenses</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-rose-100 border border-gray-200 shadow-sm" />
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-sm font-medium">10,000+ creators</p>
                <p className="text-xs text-gray-600">trusted our products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
