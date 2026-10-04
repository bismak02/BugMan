import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  Phone,
  CheckCircle,
  ShieldCheck,
  Home,
  Check,
  ExternalLink,
  Share2,
  Clock,
  Flame,
  ZoomIn,
  X
} from 'lucide-react';
import { BugManLogo } from '../components/BugManLogo';

interface PromoPageProps {
  onOpenQuoteModal: (defaultPest?: string) => void;
}

export const PromoPage: React.FC<PromoPageProps> = ({ onOpenQuoteModal }) => {
  const [claimForm, setClaimForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '21801',
    propertyType: 'Residential'
  });

  const [claimed, setClaimed] = useState(false);
  const [claimCode, setClaimCode] = useState('');
  const [flyerZoom, setFlyerZoom] = useState(false);

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `OCT-$1-${Math.floor(1000 + Math.random() * 9000)}`;
    setClaimCode(code);
    setClaimed(true);
  };

  const facebookUrl = 'https://www.facebook.com/';

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-24">
      {/* Lightbox for Flyer */}
      {flyerZoom && (
        <div
          onClick={() => setFlyerZoom(false)}
          className="fixed inset-0 z-50 bg-[#121316]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-[#c59b56]/40">
            <button
              onClick={() => setFlyerZoom(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#121316]/80 text-white rounded-full hover:bg-[#121316]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src="/src/assets/images/october_monthly_promo_flyer_1791093503918.jpg"
              alt="BugMan October $1 Treatment Monthly Promo Flyer"
              className="w-full h-auto object-contain max-h-[85vh] rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Hero Header */}
      <section className="relative bg-[#121316] text-white py-14 md:py-20 border-b border-[#252830] overflow-hidden">
        {/* Subtle orange Halloween glow for the October promo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c59b56]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#252830] border border-[#c59b56]/50 rounded-full text-xs font-bold text-[#c59b56] uppercase tracking-wider mb-4 font-heading">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Official Monthly Promo · Limited Time October Special</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
            For the Entire Month of<br />
            <span className="text-[#c59b56] drop-shadow-sm">October...</span>
          </h1>

          <p className="text-xl sm:text-2xl font-black font-heading uppercase text-white mt-2 tracking-wide">
            First Treatment <span className="text-[#c59b56] underline decoration-2 underline-offset-4">Only $1</span>
          </p>
          <p className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-widest mt-1">
            When you sign up for year-round protection
          </p>

          <p className="text-slate-300 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Don’t let creepy crawlies turn your house into a haunted house! Trust BugMan Pest Control for year-round peace of mind.
          </p>

          {/* Quick Call Button */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:4106351055"
              className="px-6 py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-xl text-xs uppercase tracking-wider font-heading shadow-lg shadow-[#c59b56]/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#121316]" />
              <span>Call (410) 635-1055 to Claim</span>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#1877F2] hover:bg-[#0c63d4] text-white font-bold rounded-xl text-xs uppercase tracking-wider font-heading transition-colors flex items-center gap-2 shadow"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Visit Us on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Promo Presentation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: The Attached Flyer Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#e8e2d5] shadow-xl relative group">
              <div
                onClick={() => setFlyerZoom(true)}
                className="relative overflow-hidden rounded-2xl cursor-zoom-in bg-slate-950"
              >
                <img
                  src="/src/assets/images/october_monthly_promo_flyer_1791093503918.jpg"
                  alt="Official BugMan Monthly Promo Flyer - October $1 Treatment"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#121316]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-heading uppercase text-xs font-bold tracking-wider">
                  <ZoomIn className="w-5 h-5 text-[#c59b56]" />
                  <span>Click to Expand Full Flyer</span>
                </div>
              </div>

              {/* Flyer caption */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Official BugMan Campaign Flyer</span>
                <button
                  type="button"
                  onClick={() => setFlyerZoom(true)}
                  className="text-[#8c6731] hover:underline font-bold flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge Flyer</span>
                </button>
              </div>
            </div>

            {/* 4 Core Value Pillars (From the Flyer) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-[#e8e2d5] shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f4ecda] text-[#8c6731] flex items-center justify-center shrink-0 border border-[#c59b56]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading uppercase text-[#121316]">
                    Year-Round Protection
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Continuous seasonal barrier defending against invaders.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#e8e2d5] shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f4ecda] text-[#8c6731] flex items-center justify-center shrink-0 border border-[#c59b56]/30">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading uppercase text-[#121316]">
                    Interior &amp; Exterior
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Full property perimeter coverage &amp; indoor treatments.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#e8e2d5] shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f4ecda] text-[#8c6731] flex items-center justify-center shrink-0 border border-[#c59b56]/30">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading uppercase text-[#121316]">
                    Keeps All Pests Away
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Ants, spiders, roaches, crickets, rodents &amp; more.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#e8e2d5] shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f4ecda] text-[#8c6731] flex items-center justify-center shrink-0 border border-[#c59b56]/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading uppercase text-[#121316]">
                    Peace of Mind
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Guaranteed results all year long with free re-treats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Claim Form & Facebook Link Banner */}
          <div className="lg:col-span-6 space-y-6">
            {/* Promo Claim Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e8e2d5] shadow-xl">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
                  Limited-Time Voucher
                </span>
                <h3 className="text-2xl font-black font-heading uppercase text-[#121316] tracking-tight mt-0.5">
                  Claim Your $1 First Treatment
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Lock in this special rate for the month of October. We will contact you to confirm your inspection time slot.
                </p>
              </div>

              {claimed ? (
                <div className="p-6 bg-[#faf8f5] rounded-2xl border border-[#c59b56] text-center">
                  <div className="w-14 h-14 bg-[#f4ecda] text-[#c59b56] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#c59b56]/50">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-black font-heading uppercase text-[#121316]">
                    Voucher Claimed!
                  </h4>
                  <div className="my-3 py-2 px-4 bg-[#121316] text-[#c59b56] rounded-xl font-mono text-sm font-bold tracking-widest inline-block border border-[#c59b56]/30">
                    {claimCode}
                  </div>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Congratulations, <strong>{claimForm.name}</strong>! Your October $1 Treatment voucher has been reserved for <strong>{claimForm.address || 'your property'}</strong>.
                  </p>
                  <p className="text-xs font-semibold text-slate-800 mt-3">
                    Our team will call you at <strong>{claimForm.phone}</strong> today to schedule your first visit!
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:4106351055"
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
                    >
                      Call Dispatch (410) 635-1055
                    </a>
                    <button
                      onClick={() => setClaimed(false)}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#efece4] text-[#121316] font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors hover:bg-[#e4ded2]"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleClaim} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={claimForm.name}
                      onChange={(e) => setClaimForm({ ...claimForm, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={claimForm.phone}
                        onChange={(e) => setClaimForm({ ...claimForm, phone: e.target.value })}
                        placeholder="(410) 635-1055"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={claimForm.email}
                        onChange={(e) => setClaimForm({ ...claimForm, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={claimForm.address}
                        onChange={(e) => setClaimForm({ ...claimForm, address: e.target.value })}
                        placeholder="123 Autumn Lane"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={claimForm.zip}
                        onChange={(e) => setClaimForm({ ...claimForm, zip: e.target.value })}
                        placeholder="21801"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setClaimForm({ ...claimForm, propertyType: 'Residential' })}
                        className={`py-2 px-3 border rounded-lg font-semibold transition-colors ${
                          claimForm.propertyType === 'Residential'
                            ? 'bg-[#121316] text-[#c59b56] border-[#121316]'
                            : 'bg-white text-slate-700 border-[#d6cebf] hover:bg-[#efece4]'
                        }`}
                      >
                        Residential Home
                      </button>
                      <button
                        type="button"
                        onClick={() => setClaimForm({ ...claimForm, propertyType: 'Commercial' })}
                        className={`py-2 px-3 border rounded-lg font-semibold transition-colors ${
                          claimForm.propertyType === 'Commercial'
                            ? 'bg-[#121316] text-[#c59b56] border-[#121316]'
                            : 'bg-white text-slate-700 border-[#d6cebf] hover:bg-[#efece4]'
                        }`}
                      >
                        Commercial Property
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-[#f5eddc] border border-[#e8d7b3] rounded-xl text-[11px] text-[#6b4d24]">
                    <span className="font-bold">Deal Terms: </span>
                    First treatment is $1 when enrolling in our Year-Round Home Protection Plan. No hidden fees. Cancel anytime satisfaction guarantee.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-sm uppercase tracking-wider font-heading shadow-md transition-all hover:shadow-lg"
                  >
                    Claim $1 First Treatment Now
                  </button>
                </form>
              )}
            </div>

            {/* Official Facebook Community Card (Requested by the User) */}
            <div className="bg-[#121316] text-white p-6 sm:p-7 rounded-3xl border border-[#2d313b] shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#c59b56] uppercase tracking-wider font-heading">
                    Official Social Community
                  </span>
                  <h4 className="text-xl font-bold font-heading uppercase text-white tracking-tight">
                    Follow Us on Facebook
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our local team on Facebook for weekly seasonal pest advisories, customer service spotlights, live giveaways, and local Eastern Shore community news!
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#1877F2] hover:bg-[#0c63d4] text-white font-bold rounded-xl text-xs uppercase tracking-wider font-heading transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Visit BugMan Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'BugMan Pest Control $1 October Deal',
                        text: 'First pest treatment only $1 for the entire month of October with BugMan Pest Control!',
                        url: window.location.href
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Promo link copied to clipboard to share on Facebook!');
                    }
                  }}
                  className="py-3 px-4 bg-[#23272e] hover:bg-[#2e333d] text-slate-200 font-bold rounded-xl text-xs uppercase tracking-wider font-heading transition-colors flex items-center justify-center gap-2 border border-[#393f4a]"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Share Deal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
