import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, MapPin, ChevronRight, Plus } from 'lucide-react';
import ProductDrawer from './components/ProductDrawer';
import CheckoutDrawer from './components/CheckoutDrawer';

// Mock Data built around luxury aesthetic
const MENU_CATEGORIES = [
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Signature Mains' },
  { id: 'drinks', label: 'Beverages' },
];

const MENU_ITEMS = [
  {
    id: 1,
    categoryId: 'starters',
    name: 'Wagyu Beef Tataki',
    description: 'Thinly sliced seared wagyu with ponzu and truffle oil',
    price: 320,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 2,
    categoryId: 'starters',
    name: 'Spicy Edamame',
    description: 'Steamed edamame tossed in garlic chili miso',
    price: 95,
    image: 'https://images.unsplash.com/photo-1548610543-de737ea7bb89?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 3,
    categoryId: 'mains',
    name: 'Black Cod Miso',
    description: 'Premium black cod marinated in sweet saikyo miso',
    price: 450,
    image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 4,
    categoryId: 'mains',
    name: 'Ribeye Tobanyaki',
    description: 'Sizzling prime ribeye with mixed mushrooms and yuzu butter',
    price: 520,
    image: 'https://images.unsplash.com/photo-1544025162-8316eb5f9ab8?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 5,
    categoryId: 'drinks',
    name: 'Matcha Lemonade',
    description: 'Ceremonial grade matcha blended with fresh yuzu lemonade',
    price: 75,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2000&auto=format&fit=crop'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Example function to handle smooth scrolling
  const scrollToCategory = (id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const handleAddToCart = (cartItem) => {
    setCart(prev => [...prev, cartItem]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen pb-24 font-sans bg-white">
      {/* Header Banner - Luxury Aesthetic, Minimalist */}
      <header className="relative w-full h-64 bg-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop"
          alt="Restaurant Ambiance"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-4xl font-light text-white tracking-widest uppercase bg-clip-text">O R I G I N</h1>
          <p className="text-gray-300 mt-2 text-sm font-light">Elegance in every bite.</p>
        </div>
      </header>

      {/* Sticky Category Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 overflow-x-auto hide-scrollbar whitespace-nowrap shadow-sm">
        <ul className="flex space-x-6 items-center">
          {MENU_CATEGORIES.map(category => (
            <li key={category.id}>
              <button
                onClick={() => scrollToCategory(category.id)}
                className={`text-sm tracking-wide transition-all ${activeCategory === category.id
                  ? 'text-orange-500 font-medium border-b-2 border-orange-500 pb-1'
                  : 'text-gray-500 font-light'
                  }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Menu Feed */}
      <main className="px-4 py-6 space-y-12 max-w-2xl mx-auto">
        {MENU_CATEGORIES.map(category => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <h2 className="text-xl font-light tracking-widest text-gray-900 mb-6 uppercase border-b border-gray-100 pb-2">
              {category.label}
            </h2>
            <div className="flex flex-col space-y-8">
              {MENU_ITEMS.filter(item => item.categoryId === category.id).map(item => (
                <article
                  key={item.id}
                  onClick={() => handleProductClick(item)}
                  className="group flex flex-col md:flex-row gap-4 active:scale-[0.98] transition-transform cursor-pointer"
                >
                  <div className="relative w-full md:w-32 h-48 md:h-32 overflow-hidden rounded-lg bg-gray-100 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500 font-light mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 md:mt-0">
                      <span className="text-base font-medium text-gray-900">{item.price} TRY</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleProductClick(item); }}
                        className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors"
                      >
                        <Plus size={18} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Floating Cart */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none z-40">
          <div className="max-w-2xl mx-auto pointer-events-auto animate-slide-up">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-slate-900 text-white rounded-xl py-4 px-6 flex items-center justify-between shadow-xl shadow-slate-900/20 active:scale-95 transition-transform hover:bg-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 px-3 py-1 rounded-md text-sm font-medium">{cartItemCount}</div>
                <span className="font-light tracking-wide">View Order</span>
              </div>
              <span className="font-medium">{cartTotal} TRY</span>
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <ProductDrawer
        isOpen={isDrawerOpen}
        item={selectedProduct}
        onClose={() => setIsDrawerOpen(false)}
        onAddToCart={handleAddToCart}
      />
      <CheckoutDrawer
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
      />
    </div>
  );
}
