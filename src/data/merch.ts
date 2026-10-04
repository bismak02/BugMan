import { MerchProduct } from '../types';

export const MERCH_PRODUCTS: MerchProduct[] = [
  {
    id: 'vintage-trucker-hat',
    name: 'The BugMan Vintage Trucker Hat',
    category: 'Headwear',
    price: 28.00,
    rating: 4.9,
    reviewsCount: 38,
    description: 'Our signature headwear featuring the iconic BugMan mascot in a high-density embroidered patch. Washed chino twill front with breathable mesh back and adjustable snap closure.',
    details: [
      'Embroidered BugMan Mascot Shield emblem',
      'Pre-curved vintage bill with contrast stitching',
      'Breathable poly-mesh rear panels',
      'Adjustable snapback — One Size Fits Most',
      'Sweat-wicking interior headband'
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'Navy & Tan', hex: '#1e293b' },
      { name: 'Charcoal & Black', hex: '#27272a' },
      { name: 'Hunter Green', hex: '#14532d' }
    ],
    tag: 'Best Seller',
    inStock: true,
    image: '/hoodie.jpg'
  },
  {
    id: 'bug-hunter-tee',
    name: 'BugMan "Local Experts" Heavyweight Tee',
    category: 'Apparel',
    price: 32.00,
    rating: 4.8,
    reviewsCount: 42,
    description: 'Ultra-durable 6.5 oz ring-spun cotton tee engineered for all-day comfort. Features a small BugMan chest badge on the front and full vintage mascot illustration on the back with "Guaranteed Results".',
    details: [
      '100% combed ring-spun heavyweight cotton',
      'Discharge water-based screen printing that never cracks',
      'Reinforced double-needle collar and hem',
      'Pre-shrunk fabric for consistent fit wash after wash',
      'Tagless neck label for maximum comfort'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: [
      { name: 'Heather Grey', hex: '#9ca3af' },
      { name: 'Vintage Black', hex: '#18181b' },
      { name: 'Clover Olive', hex: '#3f6212' }
    ],
    tag: 'Field Favorite',
    inStock: true,
    image: '/hoodie.jpg'
  },
  {
    id: 'technician-hoodie',
    name: 'BugMan Field Tech Pullover Hoodie',
    category: 'Apparel',
    price: 58.00,
    rating: 5.0,
    reviewsCount: 29,
    description: 'Thick 10 oz fleece lined hoodie built for crisp Eastern Shore mornings. Features embroidered chest emblem, metal eyelets, deep fleece-lined kangaroo pouch, and ribbed cuffs.',
    details: [
      '80% cotton, 20% polyester heavyweight anti-pill fleece',
      'Tonal drawstring with antique brass grommets',
      'Spacious front kangaroo pouch with hidden phone sleeve',
      'Side-ribbed flex panels for ease of motion',
      'Embroidered BugMan mascot badge on left chest'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Dark Navy', hex: '#0f172a' },
      { name: 'Forest Moss', hex: '#1c1917' }
    ],
    tag: 'Staff Favorite',
    inStock: true,
    image: '/hoodie.jpg'
  },
  {
    id: 'tactical-uv-inspection-light',
    name: 'BugMan Pro UV & LED Inspection Torch',
    category: 'Tools',
    price: 38.00,
    rating: 4.9,
    reviewsCount: 51,
    description: 'The exact high-power dual-mode flashlight our certified technicians carry in the field. Switches between 1200-lumen white inspection beam and 395nm UV blacklight to illuminate scorpions, bed bug traces, and rodent trails.',
    details: [
      'Dual Beam: 1200 Lumen CREE LED + 395nm UV Blacklight',
      'Aircraft-grade anodized aluminum body with knurled grip',
      'IPX6 waterproof and 2-meter drop resistant',
      'USB-C rechargeable battery included (up to 14 hrs runtime)',
      'Laser-etched BugMan emblem on barrel'
    ],
    sizes: ['Standard 6"'],
    tag: 'Field Grade Tool',
    inStock: true,
    image: '/hoodie.jpg'
  },
  {
    id: 'camp-mug-tumbler',
    name: 'BugMan Stainless Steel Thermal Camp Mug (16oz)',
    category: 'Accessories',
    price: 24.00,
    rating: 4.8,
    reviewsCount: 33,
    description: 'Vacuum insulated double-wall kitchen-grade stainless steel mug. Keeps your morning brew hot for 8 hours or your afternoon tea ice-cold for 18 hours while you work.',
    details: [
      '18/8 food-grade stainless steel with matte powdercoat',
      'Double-wall vacuum insulation — condensation-free exterior',
      'Splash-proof slide-lock sip lid with silicone gasket',
      'Ergonomic welded steel wide handle',
      'Laser engraved BugMan crest on front'
    ],
    colors: [
      { name: 'Matte Black', hex: '#18181b' },
      { name: 'Eastern Shore Navy', hex: '#1e3a8a' },
      { name: 'Rescue Red', hex: '#dc2626' }
    ],
    inStock: true,
    image: '/hoodie.jpg'
  },
  {
    id: 'vinyl-sticker-pack',
    name: 'BugMan Die-Cut Vinyl Sticker Pack (5-Pack)',
    category: 'Accessories',
    price: 12.00,
    rating: 4.9,
    reviewsCount: 64,
    description: 'Thick, weatherproof die-cut stickers crafted from premium outdoor-grade vinyl. Perfect for toolboxes, coolers, vehicle windows, water bottles, and laptops.',
    details: [
      '5 distinct custom die-cut designs (3" to 4" each)',
      'UV protective laminate resists fading from sun and rain',
      'Scratch, water, and dishwasher safe',
      'Easy-peel backing with residue-free adhesive'
    ],
    tag: 'Stocking Stuffer',
    inStock: true,
    image: '/hoodie.jpg'
  },
  {
    id: 'waxed-canvas-apron',
    name: 'BugMan Heavyweight Canvas Shop Apron',
    category: 'Tools',
    price: 45.00,
    rating: 4.7,
    reviewsCount: 16,
    description: 'Hand-crafted 16 oz water-resistant canvas work apron designed for garage tinkerers, gardeners, and grill masters. Features reinforced brass rivets and utility pocketing.',
    details: [
      '16 oz heavy waxed cotton canvas',
      'Cross-back adjustable cotton webbing straps',
      'Twin kangaroo pockets with tape measure loop',
      'Embossed genuine leather BugMan chest crest'
    ],
    sizes: ['One Size Fits All'],
    colors: [
      { name: 'Heritage Khaki', hex: '#78716c' },
      { name: 'Charcoal', hex: '#3f3f46' }
    ],
    inStock: true,
    image: '/hoodie.jpg'
  },
  {
    id: 'collector-enamel-pin',
    name: 'BugMan Agent Cloisonné Enamel Pin',
    category: 'Accessories',
    price: 10.00,
    rating: 5.0,
    reviewsCount: 47,
    description: 'Jewelry-quality hard enamel pin featuring our bug detective mascot in polished antique brass plating. Comes mounted on a custom BugMan inspection card.',
    details: [
      '1.35-inch hard enamel with polished antique brass plating',
      'Dual post backing with rubber grip clutches to prevent spinning',
      'Custom stamped backmark with MDA #34000 commemoration',
      'Packaged on full-color collectors backing card'
    ],
    tag: 'Collector Edition',
    inStock: true,
    image: '/hoodie.jpg'
  }
];
