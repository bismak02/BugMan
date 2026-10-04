import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { X, CheckCircle, ShieldCheck, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { BugManLogo } from './BugManLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPest?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultPest = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: 'Salisbury',
    zipCode: '21801',
    propertyType: 'Residential',
    selectedPests: defaultPest ? [defaultPest] : ['Ants'],
    urgency: 'Within 24-48 Hours',
    preferredTime: 'Morning (8am - 12pm)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const pestOptions = [
    'Ants',
    'Termites',
    'Bed Bugs',
    'Cockroaches',
    'Wasps & Hornets',
    'Spiders',
    'Fleas & Ticks',
    'Mosquitoes',
    'Rodents & Mice',
    'General Prevention (Home Protection Plan)'
  ];

  const handlePestToggle = (pest: string) => {
    if (formData.selectedPests.includes(pest)) {
      setFormData({
        ...formData,
        selectedPests: formData.selectedPests.filter((p) => p !== pest)
      });
    } else {
      setFormData({
        ...formData,
        selectedPests: [...formData.selectedPests, pest]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const ref = `BM-${Math.floor(10000 + Math.random() * 90000)}`;
    const timeStr = new Date().toLocaleString();
    setReferenceId(ref);

    try {
      await fetch('https://formsubmit.co/ajax/bugmannpestcontrol@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New BugMan Inspection Request [Ref #${ref}] - ${formData.fullName}`,
          _template: 'table',
          'Reference ID': ref,
          'Date & Time': timeStr,
          'Customer Name': formData.fullName,
          'Phone': formData.phone,
          'Email': formData.email,
          'Street Address': formData.streetAddress || 'N/A',
          'City': formData.city,
          'ZIP Code': formData.zipCode,
          'Property Type': formData.propertyType,
          'Selected Pests': formData.selectedPests.join(', ') || 'General Inspection',
          'Urgency': formData.urgency,
          'Preferred Time': formData.preferredTime,
          'Notes': formData.notes || 'None'
        })
      });
    } catch (err) {
      console.warn('Quote transmission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={onClose}
          className="fixed inset-0 bg-[#121316]/75 backdrop-blur-sm transition-opacity"
        />

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-[#faf8f5] rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-[#e8e2d5]">
          {/* Modal Header */}
          <div className="px-6 py-5 bg-[#121316] text-white flex items-center justify-between border-b border-[#252830]">
            <div className="flex items-center gap-3">
              <BugManLogo inverted size="sm" variant="mark" />
              <div>
                <span className="text-[11px] font-bold text-[#c59b56] uppercase tracking-widest font-heading">
                  Free Inspection &amp; Estimate
                </span>
                <h3 className="text-xl font-bold font-heading uppercase text-white tracking-tight">
                  Schedule Your Inspection
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-[#f4ecda] text-[#c59b56] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c59b56]/40">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black font-heading uppercase text-[#121316]">
                Inspection Request Received!
              </h4>
              <p className="text-sm font-bold text-[#c59b56] mt-1">
                Reference ID: #{referenceId}
              </p>
              <p className="text-sm text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our service dispatch manager is reviewing your property at <strong>{formData.streetAddress}, {formData.city}</strong> and will call you at <strong>{formData.phone}</strong> shortly to confirm your inspection time slot.
              </p>

              <div className="mt-6 p-4 bg-white border border-[#e8e2d5] rounded-xl text-left text-xs max-w-md mx-auto space-y-2 text-slate-700">
                <div className="flex items-center justify-between border-b border-[#f0ece3] pb-2">
                  <span className="font-semibold text-slate-500">Target Pests:</span>
                  <span className="font-bold text-[#121316]">{formData.selectedPests.join(', ') || 'General Inspection'}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#f0ece3] pb-2">
                  <span className="font-semibold text-slate-500">Urgency:</span>
                  <span className="font-bold text-[#8c6731]">{formData.urgency}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Preferred Window:</span>
                  <span className="font-bold text-[#121316]">{formData.preferredTime}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:4106351055"
                  className="w-full sm:w-auto px-6 py-3 bg-[#c59b56] hover:bg-[#b88b4a] text-[#121316] font-black rounded-lg text-sm transition-colors flex items-center justify-center gap-2 uppercase font-heading tracking-wider"
                >
                  <Phone className="w-4 h-4 text-[#121316]" />
                  <span>Call Now for Immediate Dispatch</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#efece4] hover:bg-[#e4ded2] text-[#121316] font-bold rounded-lg text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Quick direct phone banner */}
              <div className="p-3 bg-[#f5eddc] border border-[#e8d7b3] rounded-xl flex items-center justify-between text-xs text-[#6b4d24]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#c59b56] shrink-0" />
                  <span>Prefer to speak with an inspector right now?</span>
                </div>
                <a
                  href="tel:4106351055"
                  className="font-bold text-[#121316] hover:text-[#c59b56] whitespace-nowrap underline"
                >
                  (410) 635-1055
                </a>
              </div>

              {/* Property & Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Robert Smith"
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone Number (Best to reach you) *
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Property Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    placeholder="123 Example Way"
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    City / ZIP Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    placeholder="21801 (Salisbury)"
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  />
                </div>
              </div>

              {/* Property Type & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'Residential' })}
                      className={`py-2 px-3 border rounded-lg font-semibold transition-colors ${
                        formData.propertyType === 'Residential'
                          ? 'bg-[#121316] text-[#c59b56] border-[#121316]'
                          : 'bg-white text-slate-700 border-[#d6cebf] hover:bg-[#efece4]'
                      }`}
                    >
                      Residential Home
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'Commercial' })}
                      className={`py-2 px-3 border rounded-lg font-semibold transition-colors ${
                        formData.propertyType === 'Commercial'
                          ? 'bg-[#121316] text-[#c59b56] border-[#121316]'
                          : 'bg-white text-slate-700 border-[#d6cebf] hover:bg-[#efece4]'
                      }`}
                    >
                      Commercial Business
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Service Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        urgency: e.target.value as QuoteFormData['urgency']
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  >
                    <option value="Within 24-48 Hours">Standard (Within 24-48 Hours)</option>
                    <option value="Emergency (Same Day)">URGENT (Need Same Day Response)</option>
                    <option value="Flexible / Standard Estimate">Flexible Schedule</option>
                  </select>
                </div>
              </div>

              {/* Pest selection checklist */}
              <div className="text-xs">
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Select Pests Involved (Select all that apply):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {pestOptions.map((pest) => {
                    const isSelected = formData.selectedPests.includes(pest);
                    return (
                      <button
                        type="button"
                        key={pest}
                        onClick={() => handlePestToggle(pest)}
                        className={`text-left px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-colors ${
                          isSelected
                            ? 'bg-[#f4ecda] text-[#8c6731] border-[#c59b56] font-bold'
                            : 'bg-white text-slate-700 border-[#d6cebf] hover:bg-[#efece4]'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {pest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Time & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Preferred Time of Day
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredTime: e.target.value as QuoteFormData['preferredTime']
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  >
                    <option value="Morning (8am - 12pm)">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12pm - 4pm)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4pm - 7pm)">Evening (4:00 PM – 7:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Additional Notes or Problem Description
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. seeing ants around kitchen sink"
                    className="w-full px-3 py-2 bg-white border border-[#d6cebf] rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b56]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-[#e8e2d5]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#c59b56]" />
                  <span>Zero Obligation · 100% Free Inspection &amp; Quote</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#c59b56] hover:bg-[#b88b4a] disabled:opacity-60 text-[#121316] font-black rounded-lg text-sm uppercase tracking-wider font-heading shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#121316] border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Submit Inspection Request</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
