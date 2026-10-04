import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { BugManLogo } from '../components/BugManLogo';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Salisbury',
    zipCode: '',
    pestType: 'Ants',
    propertyType: 'Residential',
    urgency: 'Standard',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNum, setTicketNum] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `BM-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketNum(id);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
            Direct Local Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-heading uppercase text-[#121316] tracking-tight mt-1">
            Contact BugMan Pest Control
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Need an inspection, estimate, or immediate pest treatment? Speak with our friendly Eastern Shore dispatch team or submit a message below for a rapid response.
          </p>
        </div>

        {/* Emergency Callout Strip in Deep Charcoal with Antique Gold Accent */}
        <div className="mb-10 p-5 bg-[#121316] border border-[#2d313b] text-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#c59b56]/20 border border-[#c59b56]/40 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#c59b56]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading uppercase tracking-wide text-white">
                Need Immediate Emergency Pest Extermination?
              </h3>
              <p className="text-xs text-slate-300">
                Active wasps, hornets, bed bugs, or severe infestations receive immediate priority scheduling.
              </p>
            </div>
          </div>

          <a
            href="tel:4106351055"
            className="px-6 py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-xl text-sm uppercase tracking-wider font-heading shadow transition-colors whitespace-nowrap"
          >
            Call (410) 635-1055 Now
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e8e2d5] shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-[#f0ece3] pb-4">
                <BugManLogo variant="mark" size="sm" />
                <div>
                  <h3 className="font-heading font-bold text-[#121316] uppercase text-lg leading-tight">
                    BugMan Headquarters
                  </h3>
                  <span className="text-xs text-[#8c6731] font-bold">
                    MDA Certified License #: 34000
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c59b56] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#121316] font-semibold mb-0.5">
                      Main Office Address:
                    </strong>
                    <span>12087 Somerset Avenue</span>
                    <br />
                    <span>Princess Anne, MD 21853</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#c59b56] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#121316] font-semibold mb-0.5">
                      Customer Service &amp; Dispatch:
                    </strong>
                    <a
                      href="tel:4106351055"
                      className="font-bold text-[#121316] hover:text-[#c59b56] text-base"
                    >
                      (410) 635-1055
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#c59b56] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#121316] font-semibold mb-0.5">
                      Direct Email:
                    </strong>
                    <a
                      href="mailto:bugmannpestcontrol@gmail.com"
                      className="text-slate-800 hover:text-[#8c6731] font-medium underline"
                    >
                      bugmannpestcontrol@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c59b56] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#121316] font-semibold mb-0.5">
                      Hours of Operation:
                    </strong>
                    <div className="text-xs space-y-0.5 text-slate-600">
                      <div className="flex justify-between gap-4">
                        <span>Monday – Friday:</span>
                        <span className="font-semibold text-slate-900">7:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Saturday:</span>
                        <span className="font-semibold text-slate-900">8:00 AM – 4:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday &amp; Emergency:</span>
                        <span className="font-semibold text-[#8c6731]">On-Call Priority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Region Info */}
            <div className="bg-[#121316] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#2d313b]">
              <h4 className="font-heading font-bold uppercase text-base text-white mb-2">
                Counties &amp; Communities We Cover
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                We deploy technician routes throughout Wicomico, Somerset, Worcester, and Dorchester counties every business day:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Salisbury (21801, 21804)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Princess Anne (21853)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Fruitland (21826)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Berlin (21811)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Delmar (21875)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Ocean City (21842)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Crisfield (21817)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c59b56]" />
                  <span>Cambridge (21613)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Estimate Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#e8e2d5] shadow-xl">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#8c6731] font-heading">
                  Quick Response Form
                </span>
                <h3 className="text-2xl font-bold font-heading uppercase text-[#121316] tracking-tight mt-1">
                  Send an Inquiry or Schedule Online
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below. We typically respond within 15–30 minutes during normal business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-[#f4ecda] text-[#c59b56] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c59b56]/40">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black font-heading uppercase text-[#121316]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm font-semibold text-[#8c6731] mt-1">
                    Ticket #{ticketNum}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.pestType}</strong> at <strong>{formData.address || formData.city}</strong>. One of our pest specialists will contact you at <strong>{formData.phone}</strong>.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:4106351055"
                      className="px-6 py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
                    >
                      Call (410) 635-1055
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-[#efece4] hover:bg-[#e4ded2] text-[#121316] font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
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
                        placeholder="(410) 635-1055"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Property City / ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Salisbury, MD 21801"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      >
                        <option value="Residential">Residential Home</option>
                        <option value="Commercial">Commercial / Restaurant</option>
                        <option value="Multi-Family">Multi-Family / Rental</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Primary Pest Concern
                      </label>
                      <select
                        value={formData.pestType}
                        onChange={(e) => setFormData({ ...formData, pestType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      >
                        <option value="Ants">Ants (Sugar / Carpenter)</option>
                        <option value="Termites">Termites (Inspection / Damage)</option>
                        <option value="Bed Bugs">Bed Bugs</option>
                        <option value="Cockroaches">Cockroaches</option>
                        <option value="Wasps / Hornets">Wasps / Hornets / Yellow Jackets</option>
                        <option value="Spiders">Spiders</option>
                        <option value="Fleas & Ticks">Fleas &amp; Ticks</option>
                        <option value="Rodents">Mice / Rats</option>
                        <option value="Mosquitoes">Mosquito Suppression</option>
                        <option value="General Preventive">General Quarterly Prevention</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Urgency Level
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                      >
                        <option value="Standard">Standard (Within 24-48 hrs)</option>
                        <option value="Same Day">Same-Day Priority</option>
                        <option value="Flexible">Flexible Quote</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 100 Main Street"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Message / Infestation Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe where you are noticing pests, how long they've been present, or any specific concerns..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#c59b56] shrink-0" />
                    <span>Your privacy is protected. We never sell your personal information.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-sm uppercase tracking-wider font-heading shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message &amp; Request Inspection</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
