import { FloatingNav } from "@/components/FloatingNav";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import { Sparkles } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import themeMaroc from "@/assets/theme-maroc.jpg";
import themeIslamic from "@/assets/theme-islamic.jpg";

const Nouveaute = () => {
  const products = [
    { image: hero1, title: "Portes Marocaines Traditionnelles", price: "2,500 MAD", id: "1" },
    { image: hero2, title: "Calligraphie Arabe Dorée", price: "1,800 MAD", id: "2" },
    { image: hero3, title: "Coucher de Soleil sur l'Atlas", price: "2,200 MAD", id: "3" },
    { image: hero4, title: "Abstraction en Noir et Blanc", price: "1,900 MAD", id: "4" },
    { image: hero5, title: "Jardin Fleuri Aquarelle", price: "1,600 MAD", id: "5" },
    { image: hero6, title: "Souk Marocain Vintage", price: "2,300 MAD", id: "6" },
    { image: themeMaroc, title: "Mosaïque Marocaine Moderne", price: "2,800 MAD", id: "7" },
    { image: themeIslamic, title: "Art Islamique Géométrique", price: "2,600 MAD", id: "8" },
  ];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      
      <div className="pt-48 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                Nouveautés
              </h1>
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos dernières créations artistiques. Chaque tableau est une œuvre unique qui transformera votre espace.
            </p>
          </motion.div>

          {/* Modern Compact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <motion.a
                key={product.id}
                href={`/product/${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative elegant-card cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <h3 className="font-semibold text-sm mb-1 text-foreground line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold text-sm">{product.price}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                        Voir →
                      </span>
                    </div>
                  </div>
                </div>

                {index < 3 && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent text-white rounded-full text-xs font-semibold shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Nouveau
                    </span>
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Nouveaute;
