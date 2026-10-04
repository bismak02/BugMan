import React, { useState } from 'react';
import { MerchProduct } from '../types';
import { MERCH_PRODUCTS } from '../data/merch';
import {
  Star,
  ShoppingBag,
  Check,
  Shield,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Filter,
  X
} from 'lucide-react';
import { BugManLogo } from '../components/BugManLogo';

interface MerchPageProps {
  onAddToCart: (product: MerchProduct, size?: string, color?: string, qty?: number) => void;
  onOpenCart: () => void;
}

export const MerchPage: React.FC<MerchPageProps> = ({ onAddToCart, onOpenCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<MerchProduct | null>(null);

  // Modal variant selection state
  const [modalSize, setModalSize] = useState<string>('');
  const [modalColor, setModalColor] = useState<string>('');
  const [modalQty, setModalQty] = useState<number>(1);
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const categories = ['All', 'Apparel', 'Headwear', 'Tools', 'Accessories'];

  const filteredProducts = MERCH_PRODUCTS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleOpenDetail = (product: MerchProduct) => {
    setSelectedProduct(product);
    setModalSize(product.sizes ? product.sizes[0] : '');
    setModalColor(product.colors ? product.colors[0].name : '');
    setModalQty(1);
  };

  const handleModalAdd = () => {
    if (!selectedProduct) return;
    onAddToCart(selectedProduct, modalSize, modalColor, modalQty);
    setAddedToast(`Added "${selectedProduct.name}" to your bag!`);
    setTimeout(() => setAddedToast(null), 3500);
    setSelectedProduct(null);
  };

  const handleQuickAdd = (e: React.MouseEvent, product: MerchProduct) => {
    e.stopPropagation();
    const defaultSize = product.sizes ? product.sizes[0] : undefined;
    const defaultColor = product.colors ? product.colors[0].name : undefined;
    onAddToCart(product, defaultSize, defaultColor, 1);
    setAddedToast(`Added "${product.name}" to your bag!`);
    setTimeout(() => setAddedToast(null), 3500);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-24">
      {/* Toast Alert */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121316] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-[#393e4a] animate-in slide-in-from-bottom duration-200">
          <div className="w-6 h-6 rounded-full bg-[#c59b56] text-[#121316] flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <span className="text-xs font-semibold">{addedToast}</span>
          <button
            onClick={onOpenCart}
            className="ml-2 text-xs font-bold text-[#c59b56] hover:text-[#d4b27d] underline"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Merch Hero Banner in Deep Charcoal & Antique Gold */}
      <section className="relative bg-[#121316] text-white overflow-hidden border-b border-[#252830]">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/bugman_merch_apparel_1791092757189.jpg"
            alt="BugMan Official Merchandise"
            className="w-full h-full object-cover opacity-25 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/90 to-[#121316]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#c59b56] uppercase tracking-widest font-heading">
              <Sparkles className="w-4 h-4" />
              <span>Official Merch Drop · Limited Production</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase text-white tracking-tight leading-tight">
              Wear the Legend.<br />
              <span className="text-[#c59b56]">BugMan Gear.</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Show your pride in Maryland’s finest exterminators. Built tough for outdoor work, garage projects, or everyday wear with our iconic mascot illustration.
            </p>

            {/* Quick perk badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#c59b56]" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#c59b56]" />
                <span>Premium heavyweight materials</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#c59b56]" />
                <span>Hassle-free 30-day exchanges</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        {/* Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#e8e2d5]">
          <div>
            <h2 className="text-2xl font-bold font-heading uppercase text-[#121316] tracking-tight">
              Featured Gear &amp; Apparel
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing {filteredProducts.length} items in catalog
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#c59b56] text-[#121316] font-bold shadow-sm'
                    : 'bg-white text-slate-700 border border-[#d6cebf] hover:bg-[#faf8f5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleOpenDetail(product)}
              className="bg-white rounded-2xl border border-[#e8e2d5] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#c59b56] transition-all flex flex-col group cursor-pointer"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-4/3 bg-[#efece4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#121316] text-[#c59b56] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm font-heading border border-[#c59b56]/40">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="uppercase tracking-wider text-[11px] font-semibold text-[#8c6731]">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#8c6731] font-semibold text-[11px]">
                      <Star className="w-3.5 h-3.5 fill-[#c59b56] text-[#c59b56]" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-heading uppercase text-[#121316] group-hover:text-[#8c6731] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between">
                  <span className="text-lg font-black font-heading text-[#121316] tabular-nums">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="px-3.5 py-2 bg-[#121316] hover:bg-[#c59b56] text-white hover:text-[#121316] rounded-lg text-xs font-bold uppercase tracking-wider font-heading transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-[#121316]/75 backdrop-blur-sm transition-opacity"
            />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-[#faf8f5] rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-[#e8e2d5]">
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-[#121316]/80 hover:bg-[#121316] text-white rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Modal Image */}
                  <div className="relative h-64 sm:h-full bg-[#efece4]">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedProduct.tag && (
                      <span className="absolute top-4 left-4 bg-[#121316] text-[#c59b56] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow font-heading border border-[#c59b56]/40">
                        {selectedProduct.tag}
                      </span>
                    )}
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                        <span className="uppercase tracking-wider font-semibold text-[#8c6731]">
                          {selectedProduct.category}
                        </span>
                        <span>·</span>
                        <div className="flex items-center gap-1 text-[#8c6731] font-semibold">
                          <Star className="w-3.5 h-3.5 fill-[#c59b56] text-[#c59b56]" />
                          <span>{selectedProduct.rating}</span>
                          <span className="text-slate-400">({selectedProduct.reviewsCount} reviews)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black font-heading uppercase text-[#121316] leading-tight">
                        {selectedProduct.name}
                      </h3>

                      <span className="text-2xl font-black font-heading text-[#8c6731] tabular-nums mt-1 block">
                        ${selectedProduct.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1 text-xs text-slate-700 pt-1">
                      {selectedProduct.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c59b56] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Variant selectors */}
                    {selectedProduct.sizes && selectedProduct.sizes.length > 1 && (
                      <div className="pt-2">
                        <label className="block text-xs font-bold text-[#121316] uppercase mb-1.5 font-heading">
                          Select Size:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.sizes.map((s) => (
                            <button
                              key={s}
                              onClick={() => setModalSize(s)}
                              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                                modalSize === s
                                  ? 'bg-[#121316] text-[#c59b56] border-[#121316]'
                                  : 'bg-white text-slate-700 border-[#d6cebf] hover:bg-[#efece4]'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProduct.colors && (
                      <div className="pt-1">
                        <label className="block text-xs font-bold text-[#121316] uppercase mb-1.5 font-heading">
                          Color: <span className="font-normal text-slate-600 capitalize">{modalColor}</span>
                        </label>
                        <div className="flex items-center gap-2">
                          {selectedProduct.colors.map((c) => (
                            <button
                              key={c.name}
                              onClick={() => setModalColor(c.name)}
                              style={{ backgroundColor: c.hex }}
                              className={`w-7 h-7 rounded-full border-2 transition-transform ${
                                modalColor === c.name
                                  ? 'border-[#c59b56] scale-110 shadow-md ring-2 ring-[#c59b56]/40'
                                  : 'border-white shadow-sm'
                              }`}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity and Add Button */}
                    <div className="pt-3 border-t border-[#e8e2d5] flex items-center gap-3">
                      <div className="flex items-center border border-[#d6cebf] rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                          className="px-2.5 py-1.5 text-slate-600 hover:bg-[#efece4] text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 py-1.5 text-xs font-bold text-slate-900 tabular-nums">
                          {modalQty}
                        </span>
                        <button
                          onClick={() => setModalQty(modalQty + 1)}
                          className="px-2.5 py-1.5 text-slate-600 hover:bg-[#efece4] text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={handleModalAdd}
                        className="flex-1 py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading transition-colors flex items-center justify-center gap-2 shadow"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag · ${(selectedProduct.price * modalQty).toFixed(2)}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
