import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import { Code2, Music, Camera, Book } from 'lucide-react';

export default function App() {
  const products = useMemo(
    () => [
      { id: 'ui-kit', title: 'Minimal UI Kit', price: 29, rating: 4.8, format: 'Figma', icon: Code2 },
      { id: 'icon-pack', title: 'Vector Icon Pack', price: 19, rating: 4.7, format: 'SVG', icon: Code2 },
      { id: 'photo-pack', title: 'Abstract Photo Pack', price: 15, rating: 4.6, format: 'JPG', icon: Camera },
      { id: 'music-bed', title: 'Cinematic Music Bed', price: 24, rating: 4.9, format: 'WAV', icon: Music },
      { id: 'ebook', title: 'Design Systems eBook', price: 39, rating: 4.8, format: 'PDF', icon: Book },
      { id: 'portfolio-template', title: 'Portfolio Web Template', price: 49, rating: 4.9, format: 'HTML/CSS', icon: Code2 },
    ],
    []
  );

  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // [{ id, quantity }]

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { id: product.id, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const cartItems = cart
    .map((c) => {
      const product = products.find((p) => p.id === c.id);
      return product ? { ...product, quantity: c.quantity } : null;
    })
    .filter(Boolean);

  const cartCount = cart.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} onCartToggle={() => setCartOpen(true)} />
      <main>
        <Hero />
        <section id="features" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <p className="font-medium">Instant delivery</p>
              <p className="mt-1 text-sm text-gray-600">Get download links right after checkout. No waiting.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <p className="font-medium">Commercial license</p>
              <p className="mt-1 text-sm text-gray-600">Use products in client and personal projects.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <p className="font-medium">Quality curated</p>
              <p className="mt-1 text-sm text-gray-600">Every item is reviewed to ensure top quality.</p>
            </div>
          </div>
        </section>
        <ProductGrid products={products} onAddToCart={addToCart} />
        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Built for creators</h3>
              <p className="mt-3 text-gray-600">
                We source and craft digital products that help designers, developers and content creators move faster.
                From visuals to code templates, every file is production-ready.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                <li>One-time purchase, lifetime access</li>
                <li>Free updates on select items</li>
                <li>Secure payment via Stripe</li>
                <li>Instant download + email receipt</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-600">Questions? Email us at support@digitalmart.example</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 py-6 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} DigitalMart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />
    </div>
  );
}
