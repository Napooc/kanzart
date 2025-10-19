import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { ThemeCard } from "@/components/ThemeCard";
import { PartnersSection } from "@/components/PartnersSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";

import themeMaroc from "@/assets/theme-maroc.jpg";
import themeIslamic from "@/assets/theme-islamic.jpg";
import themeNature from "@/assets/theme-nature.jpg";
import themeVintage from "@/assets/theme-vintage.jpg";
import themeBW from "@/assets/theme-bw.jpg";
import themeFloral from "@/assets/theme-floral.jpg";
import themeTexture from "@/assets/theme-texture.jpg";
import themeWorld from "@/assets/theme-world.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      
      <HeroSection />

      {/* Nouveautés Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nouveautés</h2>
            <p className="text-xl text-muted-foreground">Découvrez nos dernières créations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              image={hero1}
              title="Portes Marocaines"
              price="2,500 MAD"
              link="/product/1"
              className="lg:col-span-2 lg:row-span-2"
            />
            <ProductCard
              image={hero2}
              title="Calligraphie Dorée"
              price="1,800 MAD"
              link="/product/2"
            />
            <ProductCard
              image={hero3}
              title="Sunset Atlas"
              price="2,200 MAD"
              link="/product/3"
            />
          </div>
        </div>
      </section>

      {/* Thèmes Section */}
      <section className="py-20 px-4 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Thèmes</h2>
            <p className="text-xl text-muted-foreground">Explorez nos collections par thème</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ThemeCard image={themeMaroc} title="Mon Maroc" link="/theme/maroc" delay={0} />
            <ThemeCard image={themeIslamic} title="Art Islamique" link="/theme/islamic" delay={0.1} />
            <ThemeCard image={themeNature} title="Nature" link="/theme/nature" delay={0.2} />
            <ThemeCard image={themeVintage} title="Vintage" link="/theme/vintage" delay={0.3} />
            <ThemeCard image={themeBW} title="Black & White" link="/theme/bw" delay={0.4} />
            <ThemeCard image={themeFloral} title="Art Floral" link="/theme/floral" delay={0.5} />
            <ThemeCard image={themeTexture} title="Texturé" link="/theme/texture" delay={0.6} />
            <ThemeCard image={themeWorld} title="Autour du Monde" link="/theme/world" delay={0.7} />
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meilleures Ventes</h2>
            <p className="text-xl text-muted-foreground">Les préférés de nos clients</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProductCard
                image={themeMaroc}
                title="Essence Marocaine"
                price="3,200 MAD"
                link="/product/4"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProductCard
                image={themeIslamic}
                title="Divine Calligraphie"
                price="2,800 MAD"
                link="/product/5"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProductCard
                image={themeNature}
                title="Sérénité des Montagnes"
                price="2,600 MAD"
                link="/product/6"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <PartnersSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
