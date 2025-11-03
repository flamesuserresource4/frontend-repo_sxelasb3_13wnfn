import { X, Minus, Plus, Trash2 } from 'lucide-react';

export default function CartDrawer({ open, items, onClose, onChangeQty, onRemove }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white border-l border-gray-200 shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Your cart</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="h-[calc(100%-160px)] overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{item.title}</h4>
                      <span className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500">{item.format}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="inline-flex items-center rounded-lg border border-gray-200">
                        <button onClick={() => onChangeQty(item.id, -1)} className="p-1.5 hover:bg-gray-50" aria-label="Decrease quantity">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => onChangeQty(item.id, 1)} className="p-1.5 hover:bg-gray-50" aria-label="Increase quantity">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button onClick={() => onRemove(item.id)} className="p-1.5 rounded-lg hover:bg-gray-100" aria-label="Remove item">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full px-4 py-3 rounded-lg bg-black text-white hover:bg-gray-800">
            Proceed to checkout
          </button>
          <p className="mt-2 text-xs text-gray-500">Secure payments. Instant downloads after purchase.</p>
        </div>
      </aside>
    </div>
  );
}
