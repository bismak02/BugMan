import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShieldCheck, CheckCircle2, PackageCheck } from 'lucide-react';
import { BugManLogo } from './BugManLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number, selectedSize?: string, selectedColor?: string) => void;
  onRemoveItem: (productId: string, selectedSize?: string, selectedColor?: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError?: boolean } | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Checkout form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Salisbury',
    zip: '21801',
    paymentMethod: 'card'
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 50.0;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 5.99;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'BUGMAN10') {
      setDiscountPercent(10);
      setPromoMessage({ text: '10% discount applied to your order!' });
    } else if (clean === 'LOCALEXPERT') {
      setDiscountPercent(15);
      setPromoMessage({ text: '15% Eastern Shore Resident discount applied!' });
    } else {
      setPromoMessage({ text: 'Invalid promo code. Try "BUGMAN10"', isError: true });
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `BM-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setCheckoutComplete(true);
    setIsCheckingOut(false);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#121316]/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col border-l border-[#e8e2d5]">
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-[#e8e2d5] flex items-center justify-between bg-[#f4efe6]">
            <div className="flex items-center gap-2.5">
              <BugManLogo variant="mark" size="sm" />
              <div>
                <h3 className="text-lg font-bold font-heading uppercase tracking-tight text-[#121316] leading-none">
                  Your BugMan Gear
                </h3>
                <span className="text-xs text-[#6b7280]">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in bag
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-[#e8e2d5] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Progress Tracker */}
          <div className="px-6 py-3 bg-[#f5eddc] border-b border-[#e8d7b3] text-xs">
            {remainingForFreeShipping > 0 ? (
              <div>
                <p className="text-slate-800">
                  Add <strong className="text-[#8c6731] font-bold">${remainingForFreeShipping.toFixed(2)}</strong> more to get <span className="font-bold text-[#8c6731]">FREE Shipping</span>!
                </p>
                <div className="w-full bg-[#e8d7b3] h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#c59b56] h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[#8c6731] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#c59b56]" />
                <span>You unlocked FREE standard shipping on this order!</span>
              </div>
            )}
          </div>

          {/* Order Completion Screen */}
          {checkoutComplete ? (
            <div className="flex-1 overflow-y-auto p-8 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[#f4ecda] text-[#c59b56] rounded-full flex items-center justify-center mb-4 border border-[#c59b56]/40">
                <PackageCheck className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold font-heading uppercase text-[#121316]">
                Order Confirmed!
              </h4>
              <p className="text-sm font-bold text-[#c59b56] mt-1">
                Order #{orderId}
              </p>
              <p className="text-sm text-slate-600 mt-3 max-w-xs leading-relaxed">
                Thank you for supporting BugMan Pest Control! We are packing your official merchandise. A confirmation receipt has been sent to your email.
              </p>

              <div className="mt-6 w-full p-4 bg-white border border-[#e8e2d5] rounded-xl text-left text-xs space-y-1.5 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Recipient:</span>
                  <span className="font-semibold text-slate-900">{formData.name || 'Valued Customer'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping To:</span>
                  <span className="font-semibold text-slate-900">{formData.address || 'Salisbury, MD'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-[#8c6731] font-bold">Processing for Fulfillment</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 bg-[#121316] hover:bg-[#2a2d34] text-white font-bold rounded-lg text-sm transition-colors uppercase font-heading tracking-wider"
              >
                Continue Browsing
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Details View */
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-heading font-bold text-[#121316] uppercase text-base">
                  Shipping &amp; Delivery Information
                </h4>
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs text-[#8c6731] hover:underline font-semibold"
                >
                  ← Back to Bag
                </button>
              </div>

              <form onSubmit={handleCompleteOrder} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(410) 000-0000"
                      className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Main Street"
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Payment Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 p-2.5 border border-[#d6cebf] rounded-lg cursor-pointer bg-white hover:bg-[#f4efe6]">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'card'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                        className="text-[#c59b56] focus:ring-[#c59b56]"
                      />
                      <span className="font-semibold text-slate-900">Credit / Debit Card</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 border border-[#d6cebf] rounded-lg cursor-pointer bg-white hover:bg-[#f4efe6]">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'pickup'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'pickup' })}
                        className="text-[#c59b56] focus:ring-[#c59b56]"
                      />
                      <span className="font-semibold text-slate-900">Pay at Office / Delivery</span>
                    </label>
                  </div>
                </div>

                <div className="p-3 bg-[#f5eddc] border border-[#e8d7b3] rounded-lg text-[#6b4d24] text-[11px] flex items-center gap-2 mt-4">
                  <ShieldCheck className="w-4 h-4 text-[#8c6731] shrink-0" />
                  <span>Secure 256-bit encrypted checkout. Satisfaction guaranteed.</span>
                </div>

                <div className="pt-3 border-t border-[#e8e2d5] flex justify-between items-center text-sm font-bold text-[#121316]">
                  <span>Total Due:</span>
                  <span className="text-base text-[#8c6731] font-heading tracking-wide">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-sm shadow transition-colors uppercase font-heading tracking-wider"
                >
                  Complete Order (${total.toFixed(2)})
                </button>
              </form>
            </div>
          ) : (
            /* Standard Items List */
            <>
              <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#e8e2d5]">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#f4efe6] flex items-center justify-center text-neutral-400 mb-3 border border-[#e8e2d5]">
                      <BugManLogo variant="mark" size="sm" />
                    </div>
                    <h4 className="text-base font-bold text-[#121316] font-heading uppercase">
                      Your bag is empty
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Grab an official BugMan vintage trucker hat, heavyweight tee, or field inspection light!
                    </p>
                  </div>
                ) : (
                  items.map((item, idx) => (
                    <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`} className="py-4 first:pt-0 flex gap-4">
                      {/* Product Thumbnail */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg bg-white border border-[#e8e2d5] shrink-0"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-bold text-[#121316] leading-snug">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
                              className="text-slate-400 hover:text-red-700 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                            {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                            {item.selectedSize && item.selectedColor && <span>·</span>}
                            {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-[#d6cebf] rounded-lg overflow-hidden bg-white">
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                  item.selectedSize,
                                  item.selectedColor
                                )
                              }
                              className="p-1 px-2 text-slate-600 hover:bg-[#f4efe6] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-bold text-slate-900 tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                  item.selectedSize,
                                  item.selectedColor
                                )
                              }
                              className="p-1 px-2 text-slate-600 hover:bg-[#f4efe6] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-sm font-bold text-[#121316] tabular-nums">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer with Totals */}
              {items.length > 0 && (
                <div className="p-6 border-t border-[#e8e2d5] bg-[#f4efe6]/80 space-y-3">
                  {/* Promo code form */}
                  <form onSubmit={applyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo Code (BUGMAN10)"
                      className="flex-1 px-3 py-1.5 text-xs uppercase bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#c59b56]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-1.5 bg-[#121316] hover:bg-[#252830] text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {promoMessage && (
                    <p
                      className={`text-xs ${
                        promoMessage.isError ? 'text-red-700' : 'text-[#8c6731] font-semibold'
                      }`}
                    >
                      {promoMessage.text}
                    </p>
                  )}

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-[#e8e2d5]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-900 tabular-nums">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#8c6731] font-semibold">
                        <span>Discount ({discountPercent}%)</span>
                        <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Estimated Shipping</span>
                      <span className="font-semibold text-slate-900 tabular-nums">
                        {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm font-bold text-[#121316] pt-1.5 border-t border-[#e8e2d5]">
                      <span>Total</span>
                      <span className="text-base text-[#8c6731] font-heading tracking-wide">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-sm shadow transition-all hover:shadow-lg uppercase font-heading tracking-wider"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
