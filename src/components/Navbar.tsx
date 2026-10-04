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

  const facebookUrl = 'https://www.facebook.com/';

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
            <span className="text-slate-300 hidden sm:inline">
              Inspections &amp; Estimates <strong className="text-white">Great Service!</strong>
            </span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              · Salisbury, Princess Anne &amp; Eastern Shore MD
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Direct Facebook Link in Utility Header */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#c59b56] transition-colors"
              title="BugMan Pest Control on Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <a
              href="tel:4106351055"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#c59b56] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c59b56]" />
              <span>(410) 635-1055</span>
            </a>
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

          {/* Direct Phone / Estimate CTA */}
          <a
            href="tel:4106351055"
            className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#121316] bg-[#efece4] hover:bg-[#e4ded2] rounded-lg transition-colors whitespace-nowrap border border-[#ded7c8]"
          >
            <Phone className="w-3.5 h-3.5 text-[#c59b56]" />
            <span>(410) 635-1055</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="px-4 py-2 text-xs font-black text-[#121316] bg-[#c59b56] hover:bg-[#b88b4a] rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5 whitespace-nowrap uppercase tracking-wider font-heading"
          >
            Get a Quote
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
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-[#1877F2] rounded-lg hover:bg-[#0c63d4] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Visit Us on Facebook</span>
            </a>

            <a
              href="tel:4106351055"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-[#121316] bg-[#efece4] rounded-lg hover:bg-[#e4ded2] transition-colors border border-[#ded7c8]"
            >
              <Phone className="w-4 h-4 text-[#c59b56]" />
              <span>Call (410) 635-1055</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
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
