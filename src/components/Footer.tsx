import React from 'react';
import { PageRoute } from '../types';
import { BugManLogo } from './BugManLogo';
import { Phone, Mail, MapPin, Shield, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const facebookUrl = 'https://www.facebook.com/';

  return (
    <footer className="bg-[#121316] text-[#cbced2] border-t border-[#23272e]">
      {/* Pre-footer Callout Banner */}
      <div className="bg-[#0a0b0d] border-b border-[#23272e] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c59b56] font-heading">
              Ready for immediate relief?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#faf7f2] font-heading uppercase tracking-tight mt-1">
              Call to Get a Quote Today
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Don’t let unwanted pests take over your home or workplace. Our certified technicians provide fast, safe, and guaranteed extermination.
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
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 bg-[#1e2025] hover:bg-[#2a2d34] text-white font-bold rounded-lg transition-colors text-sm border border-[#393d47] uppercase tracking-wider font-heading"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
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
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Social link */}
            <div className="pt-2">
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

          {/* Column 2: Quick Links */}
          <div>
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
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#c59b56] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Services &amp; Pests We Treat</span>
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
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-white font-bold text-base font-heading uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Serving Wicomico, Somerset, Worcester &amp; Dorchester Counties:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Salisbury, MD</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Princess Anne, MD</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Fruitland, MD</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Berlin, MD</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Delmar, MD/DE</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Ocean City, MD</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Crisfield, MD</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#c59b56] rounded-full" />
                <span>Cambridge, MD</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div>
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

          <p className="flex items-center gap-2">
            <span>Created by</span>
            <a
              href="https://www.bismakhan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c59b56] hover:text-[#d4b27d] font-semibold underline transition-colors"
            >
              Bisma Khan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
