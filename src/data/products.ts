export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Plants' | 'Planters' | 'Accessories';
  subcategory: string;
  rating: number;
  reviews: Review[];
  image: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  stock: number;
  isFeatured: boolean;
}

export const products: Product[] = [
  {
    id: 'monstera-albo',
    name: "Monstera Deliciosa 'Albo'",
    price: 185,
    category: 'Plants',
    subcategory: 'Rare Plants',
    rating: 4.9,
    image: '/assets/products/monstera_albo.jpg',
    images: [
      '/assets/products/monstera_albo.jpg',
      '/assets/products/monstera_albo_alt1.jpg',
      '/assets/products/monstera_albo_alt2.jpg'
    ],
    description: "Highly coveted by botanical collectors, the Variegated Monstera Albo Borsigiana features striking blocks of pure white variegation set against deep green fenestrated leaves. Each leaf is a unique natural work of art. These plants are grown under optimal conditions to ensure stable variegation and robust root systems.",
    specifications: {
      "Origin": "Central America (Cultivated)",
      "Light": "Bright, indirect light (avoid direct sunlight)",
      "Watering": "Water when top 2-3 inches of soil is dry. Sensitive to overwatering.",
      "Soil": "Chunky, well-draining aroid mix",
      "Humidity": "60% - 80% preferred",
      "Pet Friendly": "No, toxic to pets"
    },
    stock: 5,
    isFeatured: true,
    reviews: [
      {
        id: 'r1',
        name: "Evelyn Carter",
        rating: 5,
        comment: "Absolutely stunning! The variegation is incredible and it arrived in perfect condition. Already pushing out a new leaf with half-moon variegation!",
        date: "2026-05-12"
      },
      {
        id: 'r2',
        name: "Julian Brooks",
        rating: 5,
        comment: "A collectors dream. Shipping was fast and the packaging was extremely secure. A true statement piece for my living room.",
        date: "2026-06-01"
      }
    ]
  },
  {
    id: 'fiddle-leaf-fig',
    name: "Fiddle Leaf Fig (Ficus Lyrata)",
    price: 75,
    category: 'Plants',
    subcategory: 'Indoor Plants',
    rating: 4.6,
    image: '/assets/products/fiddle_leaf.jpg',
    images: [
      '/assets/products/fiddle_leaf.jpg',
      '/assets/products/fiddle_leaf_alt1.jpg'
    ],
    description: "With its large, violin-shaped, glossy leaves and prominent veins, the Fiddle Leaf Fig is the ultimate designer indoor tree. It stands tall and elegant, immediately upgrading any corner of your home. Grown as a single column for a sleek, minimalist architectural silhouette.",
    specifications: {
      "Origin": "West African Rainforests",
      "Light": "Consistent bright, indirect light",
      "Watering": "Thoroughly water when the top inch of soil is dry. Avoid wet feet.",
      "Soil": "Rich, well-draining potting soil",
      "Height": "4.5 to 5 feet (shipped size)",
      "Pet Friendly": "No, toxic to pets"
    },
    stock: 12,
    isFeatured: true,
    reviews: [
      {
        id: 'r3',
        name: "Clara Vance",
        rating: 4,
        comment: "Beautiful tree! It took about two weeks to adjust to my apartment (dropped one lower leaf), but now it looks incredibly happy and is thriving.",
        date: "2026-04-18"
      },
      {
        id: 'r4',
        name: "Liam O'Connor",
        rating: 5,
        comment: "Exactly what my office space needed. Beautiful dark green leaves and very healthy roots.",
        date: "2026-05-24"
      }
    ]
  },
  {
    id: 'calathea-orbifolia',
    name: "Calathea Orbifolia",
    price: 48,
    category: 'Plants',
    subcategory: 'Rare Plants',
    rating: 4.7,
    image: '/assets/products/calathea_orbifolia.jpg',
    images: [
      '/assets/products/calathea_orbifolia.jpg',
      '/assets/products/calathea_orbifolia_alt1.jpg'
    ],
    description: "Renowned for its oversized, circular leaves striped with silvery-green and dark-green bands, the Calathea Orbifolia is a showstopper. It is a member of the prayer plant family, meaning its leaves gently fold up at night and open during the day, creating a living dynamic sculpture.",
    specifications: {
      "Origin": "Bolivian Rainforest",
      "Light": "Medium to bright indirect light. No direct sun.",
      "Watering": "Keep soil consistently moist but not soggy. Prefers filtered/distilled water.",
      "Soil": "Peat-rich, well-aerated soil mix",
      "Humidity": "Needs high humidity (above 60%)",
      "Pet Friendly": "Yes, completely non-toxic"
    },
    stock: 8,
    isFeatured: false,
    reviews: [
      {
        id: 'r5',
        name: "Sophia Martinez",
        rating: 5,
        comment: "The silver stripes are gorgeous. Packaged safely and healthy upon arrival. Highly recommend this store for plants!",
        date: "2026-05-30"
      }
    ]
  },
  {
    id: 'snake-plant-laurentii',
    name: "Snake Plant 'Laurentii'",
    price: 35,
    category: 'Plants',
    subcategory: 'Indoor Plants',
    rating: 4.8,
    image: '/assets/products/snake_plant.jpg',
    images: [
      '/assets/products/snake_plant.jpg',
      '/assets/products/snake_plant_alt1.jpg'
    ],
    description: "Practically indestructible, the Sansevieria Laurentii features stiff, sword-like leaves edged with vibrant golden-yellow margins. It acts as an excellent air purifier, converting CO2 into oxygen overnight. The perfect low-maintenance green companion for bedrooms and low-light spaces.",
    specifications: {
      "Origin": "Tropical West Africa",
      "Light": "Extremely adaptable (Low light to direct sun)",
      "Watering": "Very low. Allow soil to dry out completely between waterings.",
      "Soil": "Succulent/Cactus quick-draining mix",
      "Height": "2 to 2.5 feet (shipped size)",
      "Pet Friendly": "No, toxic to pets"
    },
    stock: 25,
    isFeatured: false,
    reviews: [
      {
        id: 'r6',
        name: "Marcus Aurelius",
        rating: 5,
        comment: "Low maintenance, healthy, clean look. Perfect for my studio apartment where light is limited.",
        date: "2026-06-15"
      }
    ]
  },
  {
    id: 'terracotta-arch-planter',
    name: "Terracotta Arch Planter",
    price: 42,
    category: 'Planters',
    subcategory: 'Handmade Pots',
    rating: 4.9,
    image: '/assets/products/terracotta_arch.jpg',
    images: [
      '/assets/products/terracotta_arch.jpg',
      '/assets/products/terracotta_arch_alt1.jpg'
    ],
    description: "Individually hand-thrown by local artisans, the Terracotta Arch Planter features a beautiful repeating architectural arch motif. Crafted from high-fire Tuscan clay, this pot is porous, allowing plant roots to breathe and preventing root rot. Equipped with a drainage hole and matching saucer.",
    specifications: {
      "Material": "Natural Tuscan Clay (Terracotta)",
      "Dimensions": "8\" Diameter x 8.5\" Height",
      "Drainage": "Yes, with pre-drilled bottom hole",
      "Saucer": "Included (detachable)",
      "Finish": "Unglazed, natural textured matte"
    },
    stock: 15,
    isFeatured: true,
    reviews: [
      {
        id: 'r7',
        name: "Diana Prince",
        rating: 5,
        comment: "Beautiful texture. The arch pattern looks subtle yet elegant, and the natural clay makes my plants thrive. Absolutely worth the price.",
        date: "2026-05-19"
      }
    ]
  },
  {
    id: 'minimalist-concrete-cylinder',
    name: "Minimalist Concrete Cylinder",
    price: 38,
    category: 'Planters',
    subcategory: 'Handmade Pots',
    rating: 4.5,
    image: '/assets/products/concrete_pot.jpg',
    images: [
      '/assets/products/concrete_pot.jpg',
      '/assets/products/concrete_pot_alt1.jpg'
    ],
    description: "Cast in architectural-grade light concrete, this cylinder planter features a raw, industrial texture offset by soft, sandblasted edges. The interior is sealed with a non-toxic water barrier to protect the pot's structural integrity while preserving its rustic outdoor appearance.",
    specifications: {
      "Material": "Fiber-reinforced raw concrete",
      "Dimensions": "7.5\" Diameter x 7.5\" Height",
      "Drainage": "Yes, includes rubber plug",
      "Saucer": "Self-draining internal reservoir design",
      "Finish": "Raw concrete grey"
    },
    stock: 20,
    isFeatured: false,
    reviews: [
      {
        id: 'r8',
        name: "Ethan Hunt",
        rating: 4,
        comment: "Very sturdy and heavy pot. Matches my modern industrial decor perfectly. Wish it came in a larger 12-inch size too.",
        date: "2026-06-10"
      }
    ]
  },
  {
    id: 'ribbed-sandstone-pot',
    name: "Ribbed Sandstone Pot",
    price: 52,
    category: 'Planters',
    subcategory: 'Handmade Pots',
    rating: 4.8,
    image: '/assets/products/ribbed_sandstone.jpg',
    images: [
      '/assets/products/ribbed_sandstone.jpg',
      '/assets/products/ribbed_sandstone_alt1.jpg'
    ],
    description: "Made from a composite of natural sandstone and resin, this ribbed vessel mimics the elegant texture of eroded canyon walls. Its lightweight design makes it easy to move, while its sturdy wall thickness provides excellent insulation for roots during temperature swings.",
    specifications: {
      "Material": "Sandstone-resin composite",
      "Dimensions": "10\" Diameter x 10\" Height",
      "Drainage": "Yes, with matching tray",
      "Saucer": "Included",
      "Finish": "Textured ribbed sandstone beige"
    },
    stock: 10,
    isFeatured: true,
    reviews: [
      {
        id: 'r9',
        name: "Naomi Watts",
        rating: 5,
        comment: "Exceeded my expectations. The sandstone texture has a warm, sandy glow under lights. Looks beautiful holding my Fiddle Leaf Fig.",
        date: "2026-06-03"
      }
    ]
  },
  {
    id: 'brass-watering-can',
    name: "Solid Brass Watering Can",
    price: 64,
    category: 'Accessories',
    subcategory: 'Tools',
    rating: 4.9,
    image: '/assets/products/watering_can.jpg',
    images: [
      '/assets/products/watering_can.jpg',
      '/assets/products/watering_can_alt1.jpg'
    ],
    description: "As much a sculpture as it is a functional tool, this watering can is made of solid, polished brass. Featuring an extra-long, slender spout, it allows for high-precision watering, easily reaching under dense leaves directly to the soil. Over time, it will develop a gorgeous natural vintage patina.",
    specifications: {
      "Material": "100% Solid Brass",
      "Capacity": "1.2 Liters (40 oz)",
      "Spout Length": "10.5 inches",
      "Finish": "Polished mirror gold"
    },
    stock: 14,
    isFeatured: true,
    reviews: [
      {
        id: 'r10',
        name: "Oliver Queen",
        rating: 5,
        comment: "This is a masterpiece. I leave it on my plant shelf as a decoration. The long spout makes watering my hanging plants incredibly easy.",
        date: "2026-05-28"
      }
    ]
  },
  {
    id: 'minimalist-oak-stand',
    name: "Minimalist Oak Plant Stand",
    price: 45,
    category: 'Accessories',
    subcategory: 'Tools',
    rating: 4.4,
    image: '/assets/products/oak_stand.jpg',
    images: [
      '/assets/products/oak_stand.jpg',
      '/assets/products/oak_stand_alt1.jpg'
    ],
    description: "Elevate your favorite foliage. Crafted from sustainably sourced American White Oak, this plant stand features clean dowel joinery and a reversible design (can be flipped to showcase plants at two different heights). Finished with water-resistant matte organic oil.",
    specifications: {
      "Material": "American White Oak",
      "Pot Capacity": "Fits up to 10\" diameter pots",
      "Height": "12 inches",
      "Weight Capacity": "Holds up to 80 lbs"
    },
    stock: 18,
    isFeatured: false,
    reviews: [
      {
        id: 'r11',
        name: "Bruce Wayne",
        rating: 4,
        comment: "Very easy to assemble, nice solid wood grain. Minimalist and fits my aesthetic.",
        date: "2026-06-20"
      }
    ]
  },
  {
    id: 'leather-plant-hanger',
    name: "Macrame Leather Plant Hanger",
    price: 28,
    category: 'Accessories',
    subcategory: 'Tools',
    rating: 4.7,
    image: '/assets/products/leather_hanger.jpg',
    images: [
      '/assets/products/leather_hanger.jpg',
      '/assets/products/leather_hanger_alt1.jpg'
    ],
    description: "A modern twist on the classic 70s macrame hanger. Handmade from vegetable-tanned full-grain leather straps and solid brass rivets, this hanger securely cradles small to medium pots. Suspends from a solid brass ring.",
    specifications: {
      "Material": "Full-grain leather, Brass hardware",
      "Total Length": "32 inches",
      "Weight Capacity": "Holds up to 15 lbs",
      "Pot Compatibility": "4\" to 7\" diameter pots"
    },
    stock: 30,
    isFeatured: false,
    reviews: [
      {
        id: 'r12',
        name: "Selina Kyle",
        rating: 5,
        comment: "Beautiful, sleek leather straps. It lifts the room's energy by hanging my pothos from the ceiling. Will be buying a second one.",
        date: "2026-06-22"
      }
    ]
  }
];
