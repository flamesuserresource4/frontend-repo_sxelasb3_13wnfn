import { Star, Download } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <product.icon className="h-12 w-12 text-gray-700" />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">{product.title}</h3>
            <span className="text-sm text-gray-500">{product.format}</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? '' : 'text-gray-300'}`} fill="currentColor" />
            ))}
            <span className="ml-2 text-xs text-gray-500">{product.rating.toFixed(1)}</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
            <button
              onClick={() => onAddToCart(product)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white hover:bg-gray-800 text-sm"
            >
              <Download className="h-4 w-4" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured products</h2>
            <p className="mt-1 text-gray-600">Hand-picked assets to speed up your workflow</p>
          </div>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
