import { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount = 0, onCartToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <a href="#" className="font-semibold text-xl tracking-tight">
              DigitalMart
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent outline-none text-sm w-44"
              />
            </div>

            <button
              onClick={onCartToggle}
              className="relative p-2 rounded-lg hover:bg-gray-100"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-black text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 grid gap-2">
              <a onClick={() => setOpen(false)} href="#features" className="px-3 py-2 rounded-lg hover:bg-gray-100">Features</a>
              <a onClick={() => setOpen(false)} href="#products" className="px-3 py-2 rounded-lg hover:bg-gray-100">Products</a>
              <a onClick={() => setOpen(false)} href="#about" className="px-3 py-2 rounded-lg hover:bg-gray-100">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-3 py-2 rounded-lg hover:bg-gray-100">Contact</a>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
