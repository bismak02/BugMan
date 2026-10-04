import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle, Send } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketNum, setTicketNum] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const id = `BM-${Math.floor(1000 + Math.random() * 9000)}`;
    const timeStr = new Date().toLocaleString();
    setTicketNum(id);
    setTimestamp(timeStr);

    try {
      // 1. Save to local browser storage
      const existing = JSON.parse(localStorage.getItem('bugman_contact_inquiries') || '[]');
      const newEntry = {
        id,
        timestamp: timeStr,
        ...formData
      };
      localStorage.setItem('bugman_contact_inquiries', JSON.stringify([newEntry, ...existing]));

      // 2. Dispatch real email directly to bugmannpestcontrol@gmail.com via FormSubmit AJAX
      await fetch('https://formsubmit.co/ajax/bugmannpestcontrol@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New BugMan Website Inquiry [Ticket #${id}] - ${formData.name}`,
          _template: 'table',
          'Ticket ID': id,
          'Date & Time': timeStr,
          'Customer Name': formData.name,
          'Phone Number': formData.phone,
          'Email': formData.email,
          'City / ZIP': formData.city,
          'Street Address': formData.address || 'N/A',
          'Property Type': formData.propertyType,
          'Pest Concern': formData.pestType,
          'Urgency': formData.urgency,
          'Customer Message': formData.message || 'No additional notes provided'
        })
      });
    } catch (err) {
      console.warn('Form dispatch notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const mailtoBody = encodeURIComponent(
    `Hello BugMan Pest Control,\n\nI submitted an inquiry via your website (Ticket #${ticketNum}):\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity/ZIP: ${formData.city}\nAddress: ${formData.address || 'N/A'}\nProperty Type: ${formData.propertyType}\nPest Concern: ${formData.pestType}\nUrgency: ${formData.urgency}\n\nDetails:\n${formData.message || 'No additional notes.'}\n\nThank you!`
  );

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
                      Office Address:
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
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Estimate Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#e8e2d5] shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-heading uppercase text-[#121316] tracking-tight mt-1">
                  Send an Inquiry 
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 bg-[#f4ecda] text-[#c59b56] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c59b56]/40">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black font-heading uppercase text-[#121316]">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm font-semibold text-[#8c6731] mt-1">
                    Confirmation Ticket #{ticketNum}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Recorded at {timestamp}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.pestType}</strong> in <strong>{formData.city}</strong> has been logged.
                  </p>

                  {/* Summary of submitted details */}
                  <div className="mt-6 max-w-md mx-auto bg-[#faf8f5] border border-[#e8e2d5] rounded-xl p-4 text-left text-xs space-y-1.5 text-slate-700">
                    <div className="flex justify-between border-b border-[#f0ece3] pb-1.5 mb-1.5 font-bold text-[#121316]">
                      <span>Summary of Your Request:</span>
                      <span className="text-[#8c6731]">Status: Logged</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Name:</span>
                      <span className="font-semibold text-slate-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone:</span>
                      <a href={`tel:${formData.phone}`} className="font-semibold text-[#8c6731] hover:underline">
                        {formData.phone}
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Email:</span>
                      <span className="font-semibold text-slate-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Pest Concern:</span>
                      <span className="font-semibold text-slate-900">{formData.pestType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Urgency:</span>
                      <span className="font-semibold text-slate-900">{formData.urgency}</span>
                    </div>
                    {formData.message && (
                      <div className="pt-1.5 border-t border-[#f0ece3]">
                        <span className="text-slate-500 block mb-0.5">Notes:</span>
                        <p className="text-slate-800 italic bg-white p-2 rounded border border-[#e8e2d5]">
                          "{formData.message}"
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:bugmannpestcontrol@gmail.com?subject=${encodeURIComponent(`Website Inquiry [Ticket #${ticketNum}] - ${formData.name}`)}&body=${mailtoBody}`}
                      className="px-5 py-3 bg-[#121316] hover:bg-[#252830] text-white font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#c59b56]" />
                      <span>Email a Copy</span>
                    </a>
                    <a
                      href="tel:4106351055"
                      className="px-5 py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-xs uppercase tracking-wider font-heading transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call (410) 635-1055</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
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
                      }}
                      className="px-5 py-3 bg-[#efece4] hover:bg-[#e4ded2] text-[#121316] font-bold rounded-lg text-xs uppercase tracking-wider font-heading transition-colors"
                    >
                      New Inquiry
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
                        <option value="Standard">Standard</option>
                        <option value="Same Day">Urgent</option>
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
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] disabled:opacity-60 text-[#121316] font-black rounded-lg text-sm uppercase tracking-wider font-heading shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#121316] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message &amp; Request Inspection</span>
                      </>
                    )}
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
