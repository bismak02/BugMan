import React, { useState } from 'react';
import { PESTS_DATA } from '../data/pests';
import { PestInfo, PageRoute } from '../types';
import {
  Shield,
  Home,
  Building,
  Bug,
  CheckCircle,
  Phone,
  Search,
  Calendar,
  AlertTriangle,
  Flame,
  ArrowRight
} from 'lucide-react';
import { BugManLogo } from '../components/BugManLogo';

interface ServicesPageProps {
  onOpenQuoteModal: (defaultPest?: string) => void;
  onNavigate?: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPest, setSelectedPest] = useState<PestInfo | null>(null);

  const categories = ['All', 'Crawling', 'Stinging', 'Wood Destroying', 'Seasonal', 'Parasitic'];

  const filteredPests = PESTS_DATA.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.treatment.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-20">
      {/* Header Banner in Logo Palette */}
      <section className="bg-[#121316] text-white py-14 md:py-20 border-b border-[#252830] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c59b56] font-heading">
            Certified Extermination Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-heading uppercase tracking-tight text-white mt-1">
            Our Pest Control Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            From single-room targeted treatments to comprehensive full-property quarterly barriers, BugMan Pest Control keeps Salisbury, Princess Anne, and the Eastern Shore safe and comfortable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
              className="px-6 py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-xl text-xs uppercase tracking-wider font-heading shadow-md transition-colors"
            >
              Request Free Property Inspection
            </button>
            <a
              href="tel:4106351055"
              className="px-6 py-3.5 bg-[#1e2025] hover:bg-[#2b2e36] text-white font-bold rounded-xl text-xs uppercase tracking-wider font-heading border border-[#393d47] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c59b56]" />
              <span>Call (410) 635-1055</span>
            </a>
          </div>
        </div>
      </section>

      {/* Flagship Service Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan 1: Home Protection Plan (HPP) */}
          <div className="bg-white p-7 rounded-2xl border border-[#e8e2d5] shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#f4ecda] text-[#8c6731] rounded-xl flex items-center justify-center mb-4 border border-[#c59b56]/30">
                <Home className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-[#8c6731] uppercase tracking-wider font-heading">
                Most Popular
              </span>
              <h3 className="text-xl font-bold font-heading uppercase text-[#121316] mt-1 mb-2">
                Home Protection Plan (HPP)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Our gold standard for year-round residential peace of mind. During your first service, we treat the interior and exterior to flush out hidden colonies, followed by continuous perimeter defenses.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Quarterly exterior defense barrier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Spider de-webbing &amp; wasp nest removal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Foundation crack &amp; crevice seal check</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>100% Free re-treatments between visits</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenQuoteModal('Home Protection Plan (HPP)')}
              className="w-full py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
            >
              Get HPP Estimate
            </button>
          </div>

          {/* Plan 2: Specialized Termite & Wood-Destroying Organism Defense */}
          <div className="bg-white p-7 rounded-2xl border border-[#e8e2d5] shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#efece4] text-[#121316] rounded-xl flex items-center justify-center mb-4 border border-[#d6cebf]">
                <Shield className="w-6 h-6 text-[#c59b56]" />
              </div>
              <span className="text-[11px] font-bold text-[#8c6731] uppercase tracking-wider font-heading">
                Structural Defense
              </span>
              <h3 className="text-xl font-bold font-heading uppercase text-[#121316] mt-1 mb-2">
                Termite &amp; Carpenter Defense
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Protect your home's structural integrity. Termites cause billions in undetected damage. Our certified specialists inspect crawlspaces, foundations, and wood framing using non-invasive diagnostic tools.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Thorough crawlspace &amp; joist inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Liquid perimeter barrier application</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Continuous bait station monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Real estate inspection certificates (WDIR)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenQuoteModal('Termites')}
              className="w-full py-3 bg-[#121316] hover:bg-[#252830] text-white font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
            >
              Request Termite Inspection
            </button>
          </div>

          {/* Plan 3: Commercial & Food Service Management */}
          <div className="bg-white p-7 rounded-2xl border border-[#e8e2d5] shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#efece4] text-[#121316] rounded-xl flex items-center justify-center mb-4 border border-[#d6cebf]">
                <Building className="w-6 h-6 text-[#c59b56]" />
              </div>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider font-heading">
                Commercial Grade
              </span>
              <h3 className="text-xl font-bold font-heading uppercase text-[#121316] mt-1 mb-2">
                Commercial IPM Pest Management
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Keep your restaurant, health facility, retail floor, or distribution warehouse in full compliance with health department codes. Discreet service scheduled around your operating hours.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Discreet off-hours or early morning visits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Detailed digital inspection logbooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Rodent trap mapping &amp; fly light maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Full health inspection audit compliance</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenQuoteModal('Commercial Business Service')}
              className="w-full py-3 bg-[#121316] hover:bg-[#252830] text-white font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
            >
              Request Commercial Audit
            </button>
          </div>
        </div>
      </section>

      {/* Complete Pest Treatment Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
            Targeted Species Guide
          </span>
          <h2 className="text-3xl font-black font-heading uppercase text-[#121316] tracking-tight mt-1">
            Explore All 24+ Pests We Treat
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Click on any species to view detailed identification signs and our treatment strategy.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#d6cebf] rounded-xl shadow-sm">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === c
                    ? 'bg-[#c59b56] text-[#121316] font-bold shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-[#faf8f5]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search pest directory..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#d6cebf] rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c59b56] shadow-sm"
            />
          </div>
        </div>

        {/* Pest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPests.map((pest) => (
            <div
              key={pest.id}
              className="bg-white p-6 rounded-2xl border border-[#e8e2d5] shadow-sm hover:border-[#c59b56] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-bold text-[#8c6731] font-heading uppercase">
                    {pest.category}
                  </span>
                  <span
                    className={`font-bold ${
                      pest.dangerLevel === 'Severe'
                        ? 'text-red-700'
                        : pest.dangerLevel === 'High'
                        ? 'text-[#8c6731]'
                        : 'text-slate-500'
                    }`}
                  >
                    Risk: {pest.dangerLevel}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading uppercase text-[#121316] mb-2">
                  {pest.name}
                </h3>

                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  <strong className="text-[#121316]">Warning Signs: </strong>
                  {pest.commonSigns}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-[#121316]">BugMan Treatment: </strong>
                  {pest.treatment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ece3] flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Season: {pest.activeSeason}</span>
                <button
                  onClick={() => onOpenQuoteModal(pest.name)}
                  className="px-3.5 py-1.5 bg-[#f5eddc] hover:bg-[#c59b56] text-[#8c6731] hover:text-[#121316] rounded-lg text-xs font-bold font-heading uppercase tracking-wider transition-colors border border-[#e8d7b3]"
                >
                  Treat {pest.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
