export type PageRoute = 'home' | 'services' | 'promo' | 'contact' | 'merch';

export interface PestInfo {
  id: string;
  name: string;
  category: 'Crawling' | 'Stinging' | 'Wood Destroying' | 'Seasonal' | 'Parasitic';
  dangerLevel: 'Low' | 'Moderate' | 'High' | 'Severe';
  commonSigns: string;
  treatment: string;
  activeSeason: string;
}

export interface MerchProduct {
  id: string;
  name: string;
  category: 'Apparel' | 'Headwear' | 'Accessories' | 'Tools';
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  details: string[];
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  tag?: string;
  inStock: boolean;
  image: string;
}

export interface CartItem {
  product: MerchProduct;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  propertyType: 'Residential' | 'Commercial';
  selectedPests: string[];
  urgency: 'Emergency (Same Day)' | 'Within 24-48 Hours' | 'Flexible / Standard Estimate';
  preferredTime: 'Morning (8am - 12pm)' | 'Afternoon (12pm - 4pm)' | 'Evening (4pm - 7pm)';
  notes: string;
}
