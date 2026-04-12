import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Scissors, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
const popularProducts = products.slice(0, 8);

const artForms = [
  { name: "Bidriware", region: "Maharashtra", icon: Palette },
  { name: "Rogan Art", region: "Gujarat", icon: Palette },
  { name: "Terracotta", region: "Kerala", icon: Palette },
  { name: "Blue Pottery", region: "Rajasthan", icon: Palette },
  { name: "Chickenkari", region: "Uttar Pradesh", icon: Scissors },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img src={heroBanner} alt="Indian artistry showcase" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Celebrating Indian Artistry
          </h1>
          <p className="mt-4 text-primary-foreground/85 text-lg leading-relaxed">
            KaarigariKart brings together India's vibrant handicrafts under one digital roof.
            Every product has a story, and every story begins with a creator.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/gallery"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Explore Gallery <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground/30 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured Art Forms */}
    <section className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-bold text-center text-foreground"
      >
        Featured Art Forms
      </motion.h2>
      <p className="text-center text-muted-foreground mt-2 mb-10">Discover India's finest craftsmanship by region</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {artForms.map((art, i) => (
          <motion.div
            key={art.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to="/gallery"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <art.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{art.name}</h3>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {art.region}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Featured Products */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-center text-foreground mb-2">Featured Products</h2>
        <p className="text-center text-muted-foreground mb-10">Handpicked treasures from across India</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>

    {/* Popular Products */}
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-display text-3xl font-bold text-center text-foreground mb-2">Popular Creations</h2>
      <p className="text-center text-muted-foreground mb-10">From weaving to pottery — explore our collection</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          View All Products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-warm py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
          Every handmade piece carries the soul of its maker
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          When you shop here, you're not just buying art — you're supporting real families,
          keeping traditions alive, and inspiring the next generation of creators.
        </p>
        <Link
          to="/contact"
          className="inline-flex bg-primary-foreground text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
