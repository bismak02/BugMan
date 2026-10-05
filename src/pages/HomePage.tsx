import React, { useState } from 'react';
import { PageRoute, PestInfo } from '../types';
import { PESTS_DATA } from '../data/pests';
import { FAQS_DATA } from '../data/faq';
import { PREVENTION_TIPS } from '../data/tips';
import {
  Phone,
  ShieldCheck,
  CheckCircle,
  Calendar,
  FileCheck,
  ChevronDown,
  Search,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Home as HomeIcon,
  Building2,
  AlertTriangle,
  BadgeCheck
} from 'lucide-react';
import { BugManLogo } from '../components/BugManLogo';

interface HomePageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenQuoteModal: (defaultPest?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Pest catalog filter & search
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [pestSearch, setPestSearch] = useState('');
  const [selectedPestModal, setSelectedPestModal] = useState<PestInfo | null>(null);

  // FAQ accordion active state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = ['All', 'Crawling', 'Stinging', 'Wood Destroying', 'Seasonal', 'Parasitic'];

  const filteredPests = PESTS_DATA.filter((pest) => {
    const matchesCat = activeCategory === 'All' || pest.category === activeCategory;
    const matchesSearch = pest.name.toLowerCase().includes(pestSearch.toLowerCase()) ||
      pest.category.toLowerCase().includes(pestSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col bg-[#faf8f5]">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-[#121316] text-white">
        {/* Background Image with Scrim Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/background.jpg"
            alt="BugMan certified pest technician inspecting home exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-35 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/85 to-[#121316]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="max-w-3xl space-y-6">
            {/* Trust Badge Kicker (Clean unboxed metadata in logo colors) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
              <span className="text-[#c59b56] font-bold uppercase tracking-wider font-heading">
                BugMan Pest Control
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Licensed MDA #34000</span>
            </div>

            {/* Main Heading (Authentic copy) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight uppercase leading-[1.05] text-white">
              Local Experts,<br />
              <span className="text-[#c59b56]">Guaranteed Results.</span>
            </h1>

            {/* Authentic Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl leading-relaxed">
              Get the best pest control when you need it. <strong className="text-white">Today!</strong> Professional, environmentally responsible extermination for Salisbury, Princess Anne, and the entire Eastern Shore.
            </p>

            {/* Action Buttons in Logo Color Scheme */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="tel:4106351055"
                className="px-7 py-4 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-xl text-base uppercase tracking-wider font-heading shadow-lg shadow-[#c59b56]/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-[#121316]" />
                <span>Call (410) 635-1055</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-4 bg-[#1e2025]/90 hover:bg-[#2b2e36] text-white font-bold rounded-xl text-base uppercase tracking-wider font-heading border border-[#3b3f49] backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-[#c59b56]" />
                <span>Request Free Inspection</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3-STEP REMOVAL PROCESS ===================== */}
      <section className="py-20 bg-[#f4efe6] border-b border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
              Simple &amp; Effective
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-[#121316] tracking-tight mt-1">
              How Do I Get Rid of Pests in My Area?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our 3-step proven process brings quick eradication and long-term peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#e8e2d5] shadow-sm relative group hover:border-[#c59b56] transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#f4ecda] text-[#8c6731] rounded-xl flex items-center justify-center font-black font-heading text-xl border border-[#c59b56]/30">
                  01
                </div>
                <Calendar className="w-6 h-6 text-slate-400 group-hover:text-[#c59b56] transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-heading uppercase text-[#121316] mb-2">
                Step 1: Schedule
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Call <a href="tel:4106351055" className="text-[#8c6731] font-bold hover:underline">(410) 635-1055</a> for an inspection.
              </p>
              <p className="text-xs text-slate-500">
                Speak directly with our local team to discuss your concerns and book a convenient visit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[#e8e2d5] shadow-sm relative group hover:border-[#c59b56] transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#f4ecda] text-[#8c6731] rounded-xl flex items-center justify-center font-black font-heading text-xl border border-[#c59b56]/30">
                  02
                </div>
                <ShieldCheck className="w-6 h-6 text-slate-400 group-hover:text-[#c59b56] transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-heading uppercase text-[#121316] mb-2">
                Step 2: Treatment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                A certified technician will inspect your property &amp; provide customized pest control treatment based on the inspection results.
              </p>
              <p className="text-xs text-slate-500">
                Targeted, environmentally responsible formulas safe for children and household pets.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[#e8e2d5] shadow-sm relative group hover:border-[#c59b56] transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#f4ecda] text-[#8c6731] rounded-xl flex items-center justify-center font-black font-heading text-xl border border-[#c59b56]/30">
                  03
                </div>
                <FileCheck className="w-6 h-6 text-slate-400 group-hover:text-[#c59b56] transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-heading uppercase text-[#121316] mb-2">
                Step 3: Follow Up
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Each service provides a detailed report &amp; helpful tips to keep pests away. We return regularly throughout the year, increasing protection with every visit.
              </p>
              <p className="text-xs text-slate-500">
                Continuous seasonal defense that prevents pests from ever returning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MONTHLY PROMO SECTION ===================== */}
      {/* Features the user's created October flyer, $1 deal, and Facebook connection */}
      <section className="py-16 md:py-20 bg-[#121316] text-white border-b border-[#252830] relative overflow-hidden">
        {/* Ambient Halloween ambient glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c59b56]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Attached Flyer Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => onNavigate('promo')}
                className="relative bg-[#1e2025] p-3.5 sm:p-4 rounded-3xl border border-[#c59b56]/50 shadow-2xl hover:border-[#c59b56] transition-all cursor-pointer group max-w-md w-full"
              >
                <div className="overflow-hidden rounded-2xl relative">
                  <img
                    src="/october.jpeg"
                    alt="BugMan October $1 Treatment Monthly Promo Flyer"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <span className="px-4 py-2 bg-[#c59b56] text-[#121316] text-xs font-black uppercase font-heading rounded-lg tracking-wider shadow">
                      View Full Details &amp; Claim →
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs px-2 text-slate-300">
                  <span className="font-bold text-[#c59b56] uppercase tracking-wider font-heading">
                    Official Campaign Flyer
                  </span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    Click to enlarge &amp; claim
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Deal Details, Value Points & Facebook Link */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#252830] border border-[#c59b56]/50 rounded-full text-xs font-bold text-[#c59b56] uppercase tracking-wider mb-3 font-heading">
                  <Sparkles className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Monthly Promo · Valid for October</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading uppercase text-white tracking-tight leading-tight">
                  For the Entire Month of<br />
                  <span className="text-[#c59b56]">October...</span>
                </h2>

                <p className="text-2xl sm:text-3xl font-black font-heading uppercase text-white mt-2">
                  First Treatment <span className="text-[#c59b56] underline decoration-2 underline-offset-4">Only $1</span>
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-widest mt-1">
                  When you sign up for year-round protection
                </p>

                <p className="text-slate-300 text-sm mt-3 max-w-xl leading-relaxed">
                  <strong>DON’T LET CREEPY CRAWLIES TURN YOUR HOUSE INTO A HAUNTED HOUSE.</strong> Trust BugMan Pest Control for year-round peace of mind!
                </p>
              </div>

              {/* 4 Pillars from the flyer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-[#2d313b]">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold font-heading uppercase text-white">Year-Round</div>
                  <div className="text-[11px] text-slate-400">Protection</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold font-heading uppercase text-white">Interior &amp; Exterior</div>
                  <div className="text-[11px] text-slate-400">Complete Service</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold font-heading uppercase text-white">All Pests</div>
                  <div className="text-[11px] text-slate-400">Kept Away</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold font-heading uppercase text-white">Peace of Mind</div>
                  <div className="text-[11px] text-slate-400">All Year Long</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={() => onNavigate('promo')}
                  className="px-6 py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-xl text-xs uppercase tracking-wider font-heading shadow-lg shadow-[#c59b56]/20 transition-all hover:-translate-y-0.5"
                >
                  Claim $1 Deal on Promo Page →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT US & WHY CHOOSE US ===================== */}
      <section className="py-20 bg-white border-b border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Authentic About Us Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-[#121316] tracking-tight mt-1">
                  About Us
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  BugMan Pest Control is your trusted partner in protecting homes and businesses from unwanted pests. With years of experience in the industry, our team of certified technicians combines expertise, advanced technology, and a customer-focused approach to deliver effective and lasting pest management solutions. We understand that every property is unique, which is why we provide tailored services designed to address the specific needs of your home or business. From initial inspection to treatment and ongoing prevention, we work diligently to ensure your space remains pest-free and comfortable.
                </p>
                <p>
                  Our specialization spans both residential and commercial pest control, offering comprehensive solutions for issues ranging from common pests like ants, rodents, and spiders to more complex infestations such as termites, roaches, and wasps. At BugMan Pest Control, we prioritize safety and sustainability by utilizing environmentally friendly treatments that are safe for families, pets, and the surrounding environment. We believe that effective pest control should not come at the expense of your health or the planet.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to service excellence, integrity, and professionalism. Our mission is to provide peace of mind by delivering reliable, timely, and effective pest management that exceeds expectations. Whether you are facing an urgent infestation or seeking preventative care, you can count on BugMan Pest Control to respond promptly and deliver solutions that work.
                </p>
              </div>

              {/* Action trigger */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-sm uppercase tracking-wider font-heading transition-colors"
                >
                  Schedule Your Inspection
                </button>
                <a
                  href="tel:4106351055"
                  className="text-sm font-bold text-[#8c6731] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#c59b56]" />
                  <span>Call (410) 635-1055</span>
                </a>
              </div>
            </div>

            {/* Right: Why Choose BugMan Pest Control Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#121316] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden border border-[#2d313b]">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <BugManLogo size="xl" variant="mark" inverted />
                </div>

                <span className="text-xs uppercase font-bold tracking-widest text-[#c59b56] font-heading">
                  Local &amp; Certified
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase tracking-tight text-white mt-1 mb-6">
                  Why Choose BugMan Pest Control?
                </h3>

                {/* Verbatim bullets from original site */}
                <ul className="space-y-4 text-sm sm:text-base font-semibold">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c59b56] shrink-0 mt-0.5" />
                    <span>Great Service Near You</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c59b56] shrink-0 mt-0.5" />
                    <span>Thorough Inspection &amp; Estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c59b56] shrink-0 mt-0.5" />
                    <span>Fully Trained, Licensed &amp; Insured Staff</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[#23272e] flex items-center justify-between text-xs text-slate-400">
                  <span>Maryland Dept. of Ag. MDA #34000</span>
                  <BadgeCheck className="w-5 h-5 text-[#c59b56]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PESTS WE TREAT CATALOG ===================== */}
      <section id="pests" className="py-20 bg-[#f4efe6] border-b border-[#e8e2d5] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
              Comprehensive Protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-[#121316] tracking-tight mt-1">
              Pests We Treat
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We provide <strong>affordable pest control in Salisbury and the surrounding areas</strong> for the following bugs and nuisance invaders:
            </p>
          </div>

          {/* Filter Controls & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#d6cebf] rounded-xl shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-[#c59b56] text-[#121316] font-bold shadow-sm'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-[#faf8f5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Pest search bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={pestSearch}
                onChange={(e) => setPestSearch(e.target.value)}
                placeholder="Search bugs (e.g. ants, termites)..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#d6cebf] rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c59b56] shadow-sm"
              />
            </div>
          </div>

          {/* Grid of Pests */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredPests.map((pest) => (
              <div
                key={pest.id}
                onClick={() => setSelectedPestModal(pest)}
                className="bg-white p-4 rounded-xl border border-[#e8e2d5] hover:border-[#c59b56] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 text-[11px] font-medium text-slate-500 mb-1">
                    <span>{pest.category}</span>
                    <span
                      className={`font-semibold ${
                        pest.dangerLevel === 'Severe'
                          ? 'text-red-700'
                          : pest.dangerLevel === 'High'
                          ? 'text-[#8c6731]'
                          : 'text-slate-500'
                      }`}
                    >
                      {pest.dangerLevel}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-heading uppercase text-[#121316] group-hover:text-[#8c6731] transition-colors">
                    {pest.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {filteredPests.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#e8e2d5]">
              <p className="text-sm font-semibold text-slate-700">No pests found matching "{pestSearch}".</p>
              <p className="text-xs text-slate-500 mt-1">We treat over 50+ species! Call (410) 635-1055 to speak with an inspector.</p>
            </div>
          )}

          {/* Bottom callout trigger for pest identification */}
          <div className="mt-10 p-6 bg-[#121316] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2d313b]">
            <div>
              <h4 className="font-heading font-bold uppercase text-lg text-white">
                Not sure which bug you are seeing?
              </h4>
              <p className="text-xs text-slate-300">
                Call our licensed inspectors or send photos for immediate species identification &amp; advice.
              </p>
            </div>
            <a
              href="tel:4106351055"
              className="px-5 py-2.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] text-xs font-black rounded-lg uppercase tracking-wider font-heading whitespace-nowrap transition-colors"
            >
              Ask an Inspector: (410) 635-1055
            </a>
          </div>
        </div>
      </section>

      {/* ===================== HELPFUL PEST PREVENTION TIPS ===================== */}
      <section className="py-20 bg-white border-b border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
              Proactive Protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-[#121316] tracking-tight mt-1">
              Helpful Pest Prevention Tips
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Actionable advice from certified BugMan technicians to help keep your home and business protected year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PREVENTION_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="p-6 bg-[#faf8f5] rounded-2xl border border-[#e8e2d5] hover:border-[#c59b56] hover:bg-white transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#f4ecda] text-[#8c6731] font-bold font-heading flex items-center justify-center text-sm border border-[#c59b56]/30">
                      #{tip.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {tip.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading uppercase text-[#121316] mb-2 leading-snug">
                    {tip.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED OFFICIAL MERCH TEASER (Temporarily hidden, code preserved) ===================== */}
      {/*
      <section className="py-16 bg-[#17181d] text-white border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <img
                src="/hoodie.jpg"
                alt="BugMan official merch collection"
                className="w-full h-80 object-cover rounded-2xl border border-[#393e4a] shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-[#c59b56] text-[#121316] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow font-heading">
                Official Release
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#c59b56] font-bold uppercase tracking-widest font-heading">
                <Sparkles className="w-4 h-4" />
                <span>Now Available · The BugMan Pro Store</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-white tracking-tight">
                Gear Up with Official BugMan Merchandise
              </h2>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('merch')}
                  className="px-6 py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-xl text-sm uppercase tracking-wider font-heading shadow-lg transition-all hover:-translate-y-0.5"
                >
                  Browse Merch Store →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="py-20 bg-[#faf8f5] border-b border-[#e8e2d5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
              Answers &amp; Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-[#121316] tracking-tight mt-1">
              Pest Control &amp; Exterminator FAQ
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Common questions about treatments, safety, integrated pest management, and our visit protocol.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e8e2d5] rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#f4efe6]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading font-bold text-[#121316] text-base sm:text-lg uppercase tracking-tight">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#8c6731]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-[#f0ece3] whitespace-pre-line animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ Callout CTA */}
          <div className="mt-12 text-center p-6 bg-white border border-[#e8e2d5] rounded-2xl">
            <h4 className="font-heading font-bold text-[#121316] uppercase text-lg">
              Have a specific question about your infestation?
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Our certified inspectors are always happy to advise you on treatments, safety protocols, and free estimates.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:4106351055"
                className="px-5 py-2.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
              >
                Call (410) 635-1055
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-[#efece4] hover:bg-[#e4ded2] text-[#121316] font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
              >
                Send Us a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PEST DETAIL MODAL ===================== */}
      {selectedPestModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              onClick={() => setSelectedPestModal(null)}
              className="fixed inset-0 bg-[#121316]/70 backdrop-blur-sm transition-opacity"
            />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-[#faf8f5] rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-[#e8e2d5] p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-[#8c6731] uppercase tracking-wider font-heading">
                    {selectedPestModal.category} Pest · Danger Level: {selectedPestModal.dangerLevel}
                  </span>
                  <h3 className="text-2xl font-black font-heading uppercase text-[#121316] mt-0.5">
                    {selectedPestModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPestModal(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-[#efece4] transition-colors"
                >
                  <ChevronDown className="w-5 h-5 rotate-180" />
                </button>
              </div>

              <div className="mt-4 space-y-3.5 text-xs text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-[#e8e2d5]">
                  <strong className="block text-[#121316] font-bold font-heading uppercase text-[11px] mb-1">
                    Common Warning Signs:
                  </strong>
                  <p className="leading-relaxed">{selectedPestModal.commonSigns}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e8e2d5]">
                  <strong className="block text-[#121316] font-bold font-heading uppercase text-[11px] mb-1">
                    BugMan Treatment Method:
                  </strong>
                  <p className="leading-relaxed">{selectedPestModal.treatment}</p>
                </div>

                <div className="flex items-center justify-between text-slate-500 pt-1">
                  <span>Active Peak Season:</span>
                  <span className="font-semibold text-slate-800">{selectedPestModal.activeSeason}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e8e2d5] flex gap-2">
                <button
                  onClick={() => {
                    const pestName = selectedPestModal.name;
                    setSelectedPestModal(null);
                    onOpenQuoteModal(pestName);
                  }}
                  className="flex-1 py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading transition-colors text-center"
                >
                  Get Quote for {selectedPestModal.name}
                </button>
                <a
                  href="tel:4106351055"
                  className="px-4 py-3 bg-[#121316] hover:bg-[#252830] text-white font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
