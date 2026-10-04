import React, { useState, useEffect } from 'react';
import { PageRoute, CartItem, MerchProduct } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PromoPage } from './pages/PromoPage';
import { ContactPage } from './pages/ContactPage';
import { MerchPage } from './pages/MerchPage';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultPest, setQuoteDefaultPest] = useState<string>('');
  const [cartOpen, setCartOpen] = useState(false);

  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bugman_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bugman_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Could not save cart state', e);
    }
  }, [cartItems]);

  const handleNavigate = (page: PageRoute, hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenQuoteModal = (defaultPest?: string) => {
    setQuoteDefaultPest(defaultPest || '');
    setQuoteModalOpen(true);
  };

  const handleAddToCart = (product: MerchProduct, size?: string, color?: string, qty: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      }

      return [
        ...prev,
        {
          product,
          quantity: qty,
          selectedSize: size,
          selectedColor: color
        }
      ];
    });
  };

  const handleUpdateQuantity = (
    productId: string,
    newQty: number,
    selectedSize?: string,
    selectedColor?: string
  ) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, selectedSize, selectedColor);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
        ) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (
    productId: string,
    selectedSize?: string,
    selectedColor?: string
  ) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          )
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1e2025] font-sans selection:bg-[#c59b56] selection:text-[#121316]">
      {/* Universal Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'promo' && (
          <PromoPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {currentPage === 'merch' && (
          <MerchPage
            onAddToCart={handleAddToCart}
            onOpenCart={() => setCartOpen(true)}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Inspection / Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultPest={quoteDefaultPest}
      />

      {/* Compact Mobile Quick-Call Sticky Bottom Bar (<15% mobile viewport height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#121316]/95 backdrop-blur-md border-t border-[#23272e] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:4106351055"
          className="flex-1 py-2.5 px-3 bg-[#c59b56] active:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading flex items-center justify-center gap-1.5 shadow"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call (410) 635-1055</span>
        </a>
        <button
          onClick={() => handleNavigate('contact')}
          className="flex-1 py-2.5 px-3 bg-[#1e2025] active:bg-[#2b2e36] text-white font-bold rounded-lg text-xs uppercase tracking-wider font-heading flex items-center justify-center gap-1.5 border border-[#3b3f49]"
        >
          <Calendar className="w-3.5 h-3.5 text-[#c59b56]" />
          <span>Request Free Estimate</span>
        </button>
      </div>
    </div>
  );
}
