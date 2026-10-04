import React from 'react';
import { PageRoute } from '../types';
import { BugManLogo } from './BugManLogo';
import { Phone, Mail, MapPin, Shield, CheckCircle, ArrowRight, ExternalLink, Star } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61577192401199&sk=followers';
  const googleReviewUrl = 'https://share.google/nqMWTQyDyHfQve8LI';

  return (
    <footer className="bg-[#121316] text-[#cbced2] border-t border-[#23272e]">
      {/* Pre-footer Callout Banner */}
      <div className="bg-[#0a0b0d] border-b border-[#23272e] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-[#faf7f2] font-heading uppercase tracking-tight">
              Call to Get a Quote Today
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Don’t let unwanted pests take over your home or workplace. Our certified technicians provide fast, safe, effective pest control.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:4106351055"
              className="px-6 py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg transition-all hover:shadow-lg hover:shadow-[#c59b56]/20 text-sm flex items-center gap-2 uppercase tracking-wider font-heading"
            >
              <Phone className="w-4 h-4 text-[#121316]" />
              <span>(410) 635-1055</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#1e2025] hover:bg-[#2a2d34] text-white font-bold rounded-lg transition-colors text-sm border border-[#393d47] uppercase tracking-wider font-heading"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <BugManLogo inverted size="md" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner in protecting homes and businesses from unwanted pests across Salisbury, Princess Anne, and the entire Maryland Eastern Shore.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#c59b56] shrink-0" />
                <span className="font-semibold text-white">Maryland Dept. of Agriculture (MDA) #: 34000</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                <span>Fully Licensed, Certified &amp; Insured</span>
              </div>
            </div>

            {/* Google Reviews & Social Links */}
            <div className="pt-3 space-y-2.5">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3 bg-[#1e2025] hover:bg-[#252830] border border-[#343842] hover:border-[#c59b56]/60 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-[#c59b56] transition-colors block leading-tight">
                      Leave Us a Review or See Our Reviews on Google
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="flex text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <Star className="w-3 h-3 fill-amber-400" />
                        <Star className="w-3 h-3 fill-amber-400" />
                        <Star className="w-3 h-3 fill-amber-400" />
                        <Star className="w-3 h-3 fill-amber-400" />
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">5.0 Star Rated on Google</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white shrink-0" />
              </a>

              <div>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/40 rounded-lg text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Follow Us on Facebook</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base font-heading uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#c59b56] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('promo')}
                  className="hover:text-[#c59b56] transition-colors flex items-center gap-1.5 font-semibold text-amber-400"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Monthly Promo ($1 Deal)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('merch')}
                  className="hover:text-[#c59b56] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Official BugMan Merch Store</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#c59b56] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Contact &amp; Schedule Inspection</span>
                </button>
              </li>
              <li>
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c59b56] transition-colors flex items-center gap-1.5 text-amber-400"
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Google Reviews</span>
                  <ExternalLink className="w-3 h-3 opacity-70 ml-0.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Office Details */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-base font-heading uppercase tracking-wider mb-4">
              Local Office
            </h4>
            <div className="space-y-3.5 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c59b56] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">BugMan Pest Control</strong>
                  <span>12087 Somerset Avenue</span>
                  <br />
                  <span>Princess Anne, MD 21853</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c59b56] shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Direct Line:</span>
                  <a
                    href="tel:4106351055"
                    className="font-bold text-white hover:text-[#c59b56] transition-colors text-sm"
                  >
                    (410) 635-1055
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c59b56] shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Email Inquiries:</span>
                  <a
                    href="mailto:bugmannpestcontrol@gmail.com"
                    className="text-slate-200 hover:text-[#c59b56] transition-colors"
                  >
                    bugmannpestcontrol@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-[#23272e] text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © Copyright 2024 BugMan Pest Control. <span className="font-semibold text-slate-300">ALL RIGHTS RESERVED.</span> | MDA #: 34000
          </p>
        </div>
      </div>
    </footer>
  );
};
