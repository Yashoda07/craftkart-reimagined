export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  region?: string;
  featured?: boolean;
}

const IMG_BASE = "https://yashoda07.github.io/frontend-projects/KaarigariKart/images";

export const products: Product[] = [
  // Paintings
  { id: "p1", name: "Sunset Melody", description: "Watercolor inspired by rural evening skies.", price: 899, image: `${IMG_BASE}/sunset.jpg`, category: "Paintings" },
  { id: "p2", name: "Peacock Pride", description: "Madhubani-style peacock art celebrating beauty and grace.", price: 1499, image: `${IMG_BASE}/peacock1.jpg`, category: "Paintings" },
  { id: "p3", name: "Lotus Serenity", description: "Acrylic on canvas, symbolizing peace and spiritual beauty.", price: 849, image: `${IMG_BASE}/lotus.jpg`, category: "Paintings" },
  { id: "p4", name: "Spring Bridge", description: "Charming spring bridge surrounded by trees in full bloom.", price: 999, image: `${IMG_BASE}/bridge.jpg`, category: "Paintings" },
  { id: "p5", name: "Village Vibes", description: "Rustic charm in earthy tones — inspired by rural India.", price: 849, image: `${IMG_BASE}/village.jpg`, category: "Paintings" },
  { id: "p6", name: "Charming Swans", description: "Acrylic on canvas, symbolizing peace and loving beauty.", price: 1199, image: `${IMG_BASE}/swans.jpg`, category: "Paintings" },
  { id: "p7", name: "Tribal Glow", description: "Warli art on handmade sheet. Pure tradition, pure love.", price: 1050, image: `${IMG_BASE}/warli.jpg`, category: "Paintings" },
  { id: "p8", name: "Abstract Bloom", description: "Color splash for modern homes. Expressive and bold.", price: 1299, image: `${IMG_BASE}/abstract.jpg`, category: "Paintings" },

  // Crocheting
  { id: "c1", name: "Floral Coin Pouch", description: "Hand-crocheted mini pouch with closure. Cute & useful!", price: 299, image: `${IMG_BASE}/coinpouch.jpg`, category: "Crocheting" },
  { id: "c2", name: "Amigurumi Toys", description: "Soft toys perfect for gifts and decor. Adorable!", price: 699, image: `${IMG_BASE}/bunny.jpg`, category: "Crocheting" },
  { id: "c3", name: "Boho Coaster Set", description: "Set of 4 vibrant coasters to add a pop to your table!", price: 1199, image: `${IMG_BASE}/coaster.jpg`, category: "Crocheting" },
  { id: "c4", name: "Flower Bouquet", description: "Crochet roses of 2 different sizes with leaves!", price: 1399, image: `${IMG_BASE}/flowers.jpg`, category: "Crocheting" },

  // Knitting
  { id: "k1", name: "Outer Jacket", description: "Lavender Daisy Granny square aesthetic jackets.", price: 999, image: `${IMG_BASE}/sweater.jpg`, category: "Knitting" },
  { id: "k2", name: "Book Cover", description: "New pattern knitted Book Covers for you.", price: 499, image: `${IMG_BASE}/book.jpg`, category: "Knitting" },
  { id: "k3", name: "Trending Flower Blanket", description: "Handmade Trending Flower Blanket.", price: 1299, image: `${IMG_BASE}/blanket.jpg`, category: "Knitting" },
  { id: "k4", name: "Tote Bags", description: "New pattern knitted Tote Bags for you.", price: 499, image: `${IMG_BASE}/tote.jpg`, category: "Knitting" },

  // Maharashtra
  { id: "m1", name: "Paithani Saree", description: "Luxurious silk sarees with gold & silk threadwork.", price: 7999, image: `${IMG_BASE}/saree.jpg`, category: "Maharashtra", region: "Maharashtra" },
  { id: "m2", name: "Warli Paintings", description: "Tribal art using simple geometric shapes.", price: 1499, image: `${IMG_BASE}/warlii.jpg`, category: "Maharashtra", region: "Maharashtra" },
  { id: "m3", name: "Bidriware", description: "Beautiful Bidri with a regal lineage, crafted from gun metal with pure silver inlay.", price: 999, image: `${IMG_BASE}/bidri.jpg`, category: "Maharashtra", region: "Maharashtra" },
  { id: "m4", name: "Kolhapuri Chappals", description: "Handcrafted leather sandals, known for durability and unique designs.", price: 2499, image: `${IMG_BASE}/kolhapuri.jpg`, category: "Maharashtra", region: "Maharashtra", featured: true },

  // Gujarat
  { id: "g1", name: "Bandhani Tie-Dye", description: "Vibrant hand-stitched Bandhani patterns.", price: 899, image: `${IMG_BASE}/cloth.jpg`, category: "Gujarat", region: "Gujarat" },
  { id: "g2", name: "Rogan Art", description: "Traditional Rogan art painting on fabric.", price: 999, image: `${IMG_BASE}/rogan.jpg`, category: "Gujarat", region: "Gujarat" },
  { id: "g3", name: "Kutchi Embroidery", description: "Intricate mirror-work embroidery from Kutch.", price: 1999, image: `${IMG_BASE}/kutchi.jpg`, category: "Gujarat", region: "Gujarat", featured: true },
  { id: "g4", name: "Glass Art", description: "Beautiful hand-crafted glass art pieces.", price: 1799, image: `${IMG_BASE}/art.jpg`, category: "Gujarat", region: "Gujarat" },

  // Kerala
  { id: "ke1", name: "Aruvacode Terracotta", description: "Traditional terracotta crafts from Aruvacode.", price: 1999, image: `${IMG_BASE}/aruva.jpg`, category: "Kerala", region: "Kerala" },
  { id: "ke2", name: "Kasavu Handloom Sarees", description: "Elegant Kerala Kasavu sarees with gold border.", price: 4999, image: `${IMG_BASE}/kerala.jpg`, category: "Kerala", region: "Kerala", featured: true },
  { id: "ke3", name: "Coconut and Koir Crafts", description: "Eco-friendly crafts made from coconut and coir.", price: 1199, image: `${IMG_BASE}/koir.jpg`, category: "Kerala", region: "Kerala" },
  { id: "ke4", name: "Nettipattam Decor", description: "Traditional elephant caparison decorative pieces.", price: 999, image: `${IMG_BASE}/narr.jpg`, category: "Kerala", region: "Kerala" },

  // Rajasthan
  { id: "r1", name: "Blue Pottery", description: "Vibrant Jaipur-style blue pottery with floral designs.", price: 1699, image: `${IMG_BASE}/pot.jpg`, category: "Rajasthan", region: "Rajasthan" },
  { id: "r2", name: "Phad Paintings", description: "Traditional scroll paintings depicting folk tales.", price: 899, image: `${IMG_BASE}/phad.jpg`, category: "Rajasthan", region: "Rajasthan" },
  { id: "r3", name: "Meenakari Jewellery", description: "Intricate enamel jewellery with vibrant colors.", price: 1199, image: `${IMG_BASE}/meenakari.jpg`, category: "Rajasthan", region: "Rajasthan" },
  { id: "r4", name: "Laakh Bangles", description: "Traditional lac bangles with colorful designs.", price: 499, image: `${IMG_BASE}/laath.jpg`, category: "Rajasthan", region: "Rajasthan" },

  // Uttar Pradesh
  { id: "u1", name: "Banarasi Silk Sarees", description: "Premium handwoven silk sarees from Varanasi.", price: 9999, image: `${IMG_BASE}/banarasi.jpg`, category: "Uttar Pradesh", region: "Uttar Pradesh" },
  { id: "u2", name: "Woodcarving", description: "Intricate wood carvings from skilled artisans.", price: 999, image: `${IMG_BASE}/wood.jpg`, category: "Uttar Pradesh", region: "Uttar Pradesh" },
  { id: "u3", name: "Chickenkari Embroidery", description: "Delicate white threadwork on fine fabric.", price: 2499, image: `${IMG_BASE}/chickenkari.jpg`, category: "Uttar Pradesh", region: "Uttar Pradesh", featured: true },
  { id: "u4", name: "Zardosi Embroidery", description: "Luxurious gold thread embroidery for festive wear.", price: 999, image: `${IMG_BASE}/zardosi.jpg`, category: "Uttar Pradesh", region: "Uttar Pradesh" },

  // Other Treasures
  { id: "o1", name: "Kantha Patch Tote", description: "Vibrant hand-stitched Kantha patterns on an eco tote.", price: 899, image: `${IMG_BASE}/kantha.jpg`, category: "Other Treasures" },
  { id: "o2", name: "Warli Wall Plate", description: "Clay plate with traditional Warli dance motifs.", price: 1999, image: `${IMG_BASE}/warliplate.jpg`, category: "Other Treasures" },
  { id: "o3", name: "Pottery Bowl", description: "Jaipur-style ceramic bowl with intricate floral designs.", price: 999, image: `${IMG_BASE}/pottery.jpg`, category: "Other Treasures" },
  { id: "o4", name: "Pichwai Paintings", description: "Traditional Pichwai art depicting Lord Krishna.", price: 899, image: `${IMG_BASE}/gaay.jpg`, category: "Other Treasures" },
];

export const categories = [
  "All",
  "Paintings",
  "Crocheting",
  "Knitting",
  "Maharashtra",
  "Gujarat",
  "Kerala",
  "Rajasthan",
  "Uttar Pradesh",
  "Other Treasures",
];
