import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { FilterBar, FilterState } from "@/components/FilterBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import themeMaroc from "@/assets/theme-maroc.jpg";
import themeIslamic from "@/assets/theme-islamic.jpg";

const Nouveaute = () => {
  const [filters, setFilters] = useState<FilterState>({ colors: [], formats: [] });
  
  const allProducts = [{
    image: hero1,
    title: "Portes Marocaines Traditionnelles",
    id: "1",
    color: "rouge",
    format: "vertical"
  }, {
    image: hero2,
    title: "Calligraphie Arabe Dorée",
    id: "2",
    color: "bleu",
    format: "horizontal"
  }, {
    image: hero3,
    title: "Coucher de Soleil sur l'Atlas",
    id: "3",
    color: "orange",
    format: "carre"
  }, {
    image: hero4,
    title: "Abstraction en Noir et Blanc",
    id: "4",
    color: "noir",
    format: "vertical"
  }, {
    image: hero5,
    title: "Jardin Fleuri Aquarelle",
    id: "5",
    color: "vert",
    format: "horizontal"
  }, {
    image: hero6,
    title: "Souk Marocain Vintage",
    id: "6",
    color: "jaune",
    format: "carre"
  }, {
    image: themeMaroc,
    title: "Mosaïque Marocaine Moderne",
    id: "7",
    color: "rose",
    format: "vertical"
  }, {
    image: themeIslamic,
    title: "Art Islamique Géométrique",
    id: "8",
    color: "violet",
    format: "horizontal"
  }];

  // Filter products based on active filters
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesColor = filters.colors.length === 0 || filters.colors.includes(product.color);
      const matchesFormat = filters.formats.length === 0 || filters.formats.includes(product.format);
      return matchesColor && matchesFormat;
    });
  }, [filters]);

  return <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <WhatsAppButton />
      
      <div className="pt-40 pb-16 px-4 lg:px-8">
        {/* Hero Header - Compact */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-accent" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient">
              Nouveautés
            </h1>
            <Sparkles className="h-8 w-8 text-accent" />
          </div>
          <p className="text-lg text-muted-foreground">
            Découvrez nos dernières créations artistiques. Chaque tableau est une œuvre unique qui transformera votre espace.
          </p>
        </motion.div>

        {/* Layout with Filter Sidebar */}
        <div className="flex gap-6 lg:gap-8">
          {/* Left Sidebar - Filters */}
          <FilterBar filters={filters} onFiltersChange={setFilters} />

          {/* Right Content - Products */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {filteredProducts.map((product, index) => <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1,
                duration: 0.5
              }} className="group relative elegant-card cursor-pointer overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75" />
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

                  {index < 3 && <div className="absolute top-3 right-3 z-10">
                      
                    </div>}
                  </motion.div>
                </Link>)}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 glass-effect rounded-3xl"
              >
                <p className="text-2xl text-muted-foreground mb-4">Aucun produit trouvé</p>
                <p className="text-muted-foreground">Essayez de modifier vos filtres</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <FooterTaped />
    </div>;
};
export default Nouveaute;