import { motion } from "framer-motion";
import { Heart, Leaf, Users, Sparkles } from "lucide-react";

const commitments = [
  { icon: Users, text: "Supporting artisans with fair opportunities" },
  { icon: Sparkles, text: "Showcasing authentic, handmade products" },
  { icon: Heart, text: "Preserving India's cultural and artistic heritage" },
  { icon: Leaf, text: "Promoting eco-friendly and sustainable crafts" },
];

const About = () => (
  <div className="container mx-auto px-4 py-10">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
      <h1 className="font-display text-4xl font-bold text-foreground text-center mb-8">About KaarigariKart</h1>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">🧵 Our Story</h2>
        <p className="text-foreground leading-relaxed">
          KaarigariKart is a heartfelt initiative to bring India's timeless handmade crafts to the forefront of the digital world.
          This platform showcases the creativity of local artisans — from traditional paintings and intricate crochet work to
          beautiful pottery and embroidery.
        </p>
        <p className="text-foreground leading-relaxed mt-4">
          As an artist myself, I always dreamed of building a space where handmade art could shine, be appreciated, and even
          purchased directly from the creators. KaarigariKart is that dream — a platform where art meets technology, and talent
          finds a voice.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">🧵 Our Mission & Vision</h2>
        <p className="text-foreground leading-relaxed">
          Our mission is simple yet powerful — to preserve India's cultural heritage while empowering local artisans.
          We envision a world where traditional crafts find their rightful place in modern homes, and where every artisan's
          work is valued, celebrated, and cherished.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">🧵 Why Handmade Matters</h2>
        <p className="text-foreground leading-relaxed">
          Handmade art is more than just a product — it's a legacy. Each painting, crochet design, or clay pot carries the
          warmth of human touch, the richness of tradition, and the uniqueness of imperfection. By choosing handmade, you are
          preserving culture, supporting sustainability, and celebrating creativity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">🧵 Our Commitments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {commitments.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-5 rounded-lg bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center bg-card rounded-xl p-8 border border-border">
        <p className="text-foreground leading-relaxed italic">
          "Every product on KaarigariKart is more than an object — it's a story stitched, carved, or painted by loving hands.
          When you shop here, you are supporting real families, keeping traditions alive, and inspiring the next generation of creators."
        </p>
        <p className="mt-4 font-display font-semibold text-primary">With love, Yashoda</p>
      </section>
    </motion.div>
  </div>
);

export default About;
