import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BugManLogo } from './BugManLogo';
import { Phone, ShoppingBag, Menu, X, ShieldCheck, Flame } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageRoute, hash?: string) => {
    onNavigate(page, hash);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e2d5]">
      {/* Top utility announcement banner matching the logo's dark charcoal & antique gold */}
      <div className="bg-[#121316] text-[#e8e2d5] text-xs font-medium py-1.5 px-4 sm:px-6 border-b border-[#252830]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[#c59b56]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wide">MDA #: 34000</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300">
              Inspections &amp; Estimates <strong className="text-white">Great Service!</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus-visible:outline-2 focus-visible:outline-[#c59b56] rounded-md py-1"
          aria-label="BugMan Pest Control Home"
        >
          <BugManLogo size="md" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1e2025]">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors py-1 relative whitespace-nowrap ${
              currentPage === 'home'
                ? 'text-[#c59b56] font-semibold'
                : 'hover:text-[#c59b56]'
            }`}
          >
            Home
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b56] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className={`transition-colors py-1 relative whitespace-nowrap ${
              currentPage === 'services'
                ? 'text-[#c59b56] font-semibold'
                : 'hover:text-[#c59b56]'
            }`}
          >
            Services &amp; Pests
            {currentPage === 'services' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b56] rounded-full" />
            )}
          </button>

          {/* Monthly Promo Link (Requested by user) */}
          <button
            onClick={() => handleNavClick('promo')}
            className={`transition-colors py-1 relative whitespace-nowrap flex items-center gap-1.5 ${
              currentPage === 'promo'
                ? 'text-[#c59b56] font-semibold'
                : 'hover:text-[#c59b56]'
            }`}
          >
            <span className="font-bold">Monthly Promo</span>
            <span className="text-[10px] uppercase font-black tracking-wider px-1.5 py-0.5 bg-amber-500 text-[#121316] rounded shadow-xs font-heading flex items-center gap-0.5">
              <Flame className="w-2.5 h-2.5 fill-current" />
              <span>$1 Deal</span>
            </span>
            {currentPage === 'promo' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b56] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('merch')}
            className={`transition-colors py-1 relative whitespace-nowrap flex items-center gap-1.5 ${
              currentPage === 'merch'
                ? 'text-[#c59b56] font-semibold'
                : 'hover:text-[#c59b56]'
            }`}
          >
            <span>Merch Store</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#f5eddc] text-[#8c6731] border border-[#dcbfa2] rounded">
              Store
            </span>
            {currentPage === 'merch' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b56] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors py-1 relative whitespace-nowrap ${
              currentPage === 'contact'
                ? 'text-[#c59b56] font-semibold'
                : 'hover:text-[#c59b56]'
            }`}
          >
            Contact Us
            {currentPage === 'contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b56] rounded-full" />
            )}
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Shopping Bag trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 text-[#1e2025] hover:text-[#c59b56] hover:bg-[#efece4] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#c59b56]"
            aria-label={`Open Cart (${cartCount} items)`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 bg-[#c59b56] text-[#121316] text-[11px] font-black rounded-full tabular-nums shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1e2025] hover:text-[#c59b56] hover:bg-[#efece4] rounded-lg focus-visible:outline-2 focus-visible:outline-[#c59b56]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e8e2d5] bg-[#faf8f5] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2 text-base font-semibold rounded-lg ${
                currentPage === 'home'
                  ? 'bg-[#f4ecda] text-[#8c6731]'
                  : 'text-[#1e2025] hover:bg-[#efece4]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left px-3 py-2 text-base font-semibold rounded-lg ${
                currentPage === 'services'
                  ? 'bg-[#f4ecda] text-[#8c6731]'
                  : 'text-[#1e2025] hover:bg-[#efece4]'
              }`}
            >
              Services &amp; Pests We Treat
            </button>
            <button
              onClick={() => handleNavClick('promo')}
              className={`text-left px-3 py-2 text-base font-semibold rounded-lg flex items-center justify-between ${
                currentPage === 'promo'
                  ? 'bg-[#f4ecda] text-[#8c6731]'
                  : 'text-[#1e2025] hover:bg-[#efece4]'
              }`}
            >
              <span className="font-bold">Monthly Promo</span>
              <span className="text-[10px] font-black text-[#121316] bg-amber-500 px-2 py-0.5 rounded shadow-xs font-heading">
                $1 Deal
              </span>
            </button>
            <button
              onClick={() => handleNavClick('merch')}
              className={`text-left px-3 py-2 text-base font-semibold rounded-lg flex items-center justify-between ${
                currentPage === 'merch'
                  ? 'bg-[#f4ecda] text-[#8c6731]'
                  : 'text-[#1e2025] hover:bg-[#efece4]'
              }`}
            >
              <span>Official Merch Store</span>
              <span className="text-[10px] font-bold text-[#8c6731] bg-[#f4ecda] px-2 py-0.5 rounded border border-[#dcbfa2]">
                Store
              </span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3 py-2 text-base font-semibold rounded-lg ${
                currentPage === 'contact'
                  ? 'bg-[#f4ecda] text-[#8c6731]'
                  : 'text-[#1e2025] hover:bg-[#efece4]'
              }`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-[#e8e2d5] flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 text-sm font-black text-[#121316] bg-[#c59b56] rounded-lg hover:bg-[#b88b4a] transition-colors uppercase tracking-wider font-heading"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
