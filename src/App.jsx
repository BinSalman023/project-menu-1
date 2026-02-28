import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronRight, Plus, Search, Globe } from 'lucide-react';
import ProductDrawer from './components/ProductDrawer';
import CheckoutDrawer from './components/CheckoutDrawer';
import { MENU_CATEGORIES, MENU_ITEMS } from './data';
import { useLanguage } from './LanguageContext';

export default function App() {
  const { lang, setLang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    setIsLangOpen(false);
  };

  const scrollToCategory = (id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    // Ignore search mode scrolling if elements are filtered out
    if (element) {
      const offset = 80;
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

  // Filter items based on search query in the current language
  const filteredItems = MENU_ITEMS.filter(item => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const name = item.name[lang] || '';
    const desc = item.description[lang] || '';
    return name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
  });

  return (
    <div className={`min-h-screen pb-24 font-sans bg-white ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header Banner */}
      <header className="relative w-full h-64 bg-black overflow-hidden">
        <img
          src="/images/Western-Box-Meal.jpg" // Maintaining the ambiance background
          alt="Restaurant Ambiance"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-4 py-2 flex items-center gap-3 border border-white/20">
            <ShoppingBag size={20} className="text-orange-600" />
            <div className="flex flex-col">
              <span className="text-gray-900 text-sm font-bold leading-none">{cartTotal} TRY</span>
              <span className="text-gray-500 text-xs font-medium">{cartItemCount} {t('addCart')}</span>
            </div>
          </div>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl px-4 py-2.5 flex items-center gap-2 text-gray-900 border border-white/20 hover:bg-white transition-all font-medium"
            >
              <Globe size={18} className="text-orange-600" />
              <span className="text-sm uppercase tracking-wide">{lang}</span>
            </button>

            {isLangOpen && (
              <div className={`absolute top-full mt-2 ${lang === 'ar' ? 'left-0' : 'right-0'} bg-white rounded-xl shadow-xl w-32 border border-gray-100 overflow-hidden z-[100] animate-slide-up`}>
                {[
                  { id: 'ar', label: 'العربية' },
                  { id: 'tr', label: 'Türkçe' },
                  { id: 'en', label: 'English' }
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => handleLanguageChange(l.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-orange-50 ${lang === l.id ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-6 pb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-white rounded-2xl p-1 flex items-center justify-center shadow-2xl">
              <img src="/images/logo-Qalaat-Al-Sham.png" alt="Qalaat Al-Sham Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
                {lang === 'ar' ? 'مطعم قلعة الشام' : lang === 'tr' ? 'Şam Kalesi Restoranı' : 'Qalaat Al-Sham'}
              </h1>
              <p className="text-gray-200 mt-1 text-sm md:text-base font-medium drop-shadow-md">
                {lang === 'ar' ? 'أصالة المذاق الشامي في إسطنبول' : lang === 'tr' ? 'İstanbul\'da otantik Şam lezzeti' : 'Authentic Levantine taste in Istanbul'}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Category Navigation & Search */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 flex flex-col">
        {/* Search Bar */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            />
          </div>
        </div>

        {/* Categories (Hide if searching) */}
        {!searchQuery && (
          <nav className="px-4 py-3 overflow-x-auto hide-scrollbar whitespace-nowrap">
            <ul className="flex space-x-6 items-center">
              {MENU_CATEGORIES.map(category => (
                <li key={category.id} className="first:ml-0 rtl:last:mr-0">
                  <button
                    onClick={() => scrollToCategory(category.id)}
                    className={`text-sm tracking-wide transition-all ${activeCategory === category.id
                      ? 'text-orange-500 font-bold border-b-2 border-orange-500 pb-1'
                      : 'text-gray-500 font-medium'
                      }`}
                  >
                    {category.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Main Menu Feed */}
      <main className="px-4 py-6 space-y-12 max-w-2xl mx-auto">
        {searchQuery ? (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
              {t('menu')} - Search Results
            </h2>
            {filteredItems.length === 0 ? (
              <p className="text-gray-500 text-center py-10">No items found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map(item => (
                  <MenuCard key={`search-${item.id}`} item={item} lang={lang} t={t} onClick={() => handleProductClick(item)} />
                ))}
              </div>
            )}
          </section>
        ) : (
          MENU_CATEGORIES.map(category => {
            const categoryItems = filteredItems.filter(item => item.categoryId === category.id);
            if (categoryItems.length === 0) return null;

            return (
              <section key={category.id} id={category.id} className="scroll-mt-36">
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">
                  {category.label[lang]}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryItems.map(item => (
                    <MenuCard key={item.id} item={item} lang={lang} t={t} onClick={() => handleProductClick(item)} />
                  ))}
                </div>
              </section>
            );
          })
        )}
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
                <span className="font-medium tracking-wide">{t('viewOrder')}</span>
              </div>
              <span className="font-bold">{cartTotal} {t('currency')}</span>
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
        onClearCart={() => setCart([])}
      />
    </div>
  );
}

// Sub-component for Menu Items
function MenuCard({ item, lang, t, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group flex flex-row gap-4 active:scale-[0.98] transition-transform cursor-pointer bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-md"
    >
      <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-lg bg-gray-50">
        <img
          src={item.image}
          alt={item.name[lang]}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 py-1 overflow-hidden">
        <div>
          <h3 className="text-base font-bold text-gray-900 line-clamp-1">{item.name[lang]}</h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {item.description[lang]}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-bold text-orange-600">{item.price} {t('currency')}</span>
          <button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors"
          >
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  );
}
