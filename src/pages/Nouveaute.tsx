import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
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
    { image: hero1, title: "Portes Marocaines Traditionnelles", id: "1" },
    { image: hero2, title: "Calligraphie Arabe Dorée", id: "2" },
    { image: hero3, title: "Coucher de Soleil sur l'Atlas", id: "3" },
    { image: hero4, title: "Abstraction en Noir et Blanc", id: "4" },
    { image: hero5, title: "Jardin Fleuri Aquarelle", id: "5" },
    { image: hero6, title: "Souk Marocain Vintage", id: "6" },
    { image: themeMaroc, title: "Mosaïque Marocaine Moderne", id: "7" },
    { image: themeIslamic, title: "Art Islamique Géométrique", id: "8" },
  ];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      
      <div className="pt-32 pb-16 px-4">
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
                className="group relative elegant-card cursor-pointer overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-semibold text-sm text-white line-clamp-2 mb-2">
                      {product.title}
                    </h3>
                    <span className="text-xs text-white/90 flex items-center gap-1">
                      Personnaliser <span className="text-accent">→</span>
                    </span>
                  </div>
                </div>

                {index < 3 && (
                  <div className="absolute top-3 right-3 z-10">
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent text-white rounded-full text-xs font-bold shadow-lg"
                    >
                      <Sparkles className="h-3 w-3" />
                      Nouveau
                    </motion.span>
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <FooterTaped />
    </div>
  );
};

export default Nouveaute;
