import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { FilterBar, FilterState } from "@/components/FilterBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const Theme = () => {
  const { theme } = useParams();
  const [filters, setFilters] = useState<FilterState>({ colors: [], formats: [] });
  
  const themeData: Record<string, { title: string; description: string; hero: string }> = {
    maroc: { title: "Mon Maroc", description: "Célébrez la beauté du patrimoine marocain", hero: hero1 },
    islamic: { title: "Art Islamique et Calligraphie", description: "L'élégance de la tradition islamique", hero: hero2 },
    nature: { title: "Nature et Paysage", description: "La beauté naturelle dans votre espace", hero: hero3 },
    vintage: { title: "Antique et Vintage", description: "Le charme intemporel du passé", hero: hero4 },
    bw: { title: "Black and White", description: "L'élégance monochrome", hero: hero1 },
    floral: { title: "Art Floral", description: "La nature en floraison", hero: hero2 },
    texture: { title: "Tableaux Texturés", description: "Relief et profondeur artistique", hero: hero3 },
    world: { title: "Autour du Monde", description: "Voyagez à travers l'art", hero: hero4 },
    cinema: { title: "Cinéma et Musique", description: "L'art du spectacle et des mélodies", hero: hero1 },
    sports: { title: "Sports et Jeux", description: "L'énergie de la compétition", hero: hero2 },
    enfant: { title: "Enfant", description: "Un monde d'imagination et de rêves", hero: hero3 },
    anime: { title: "Anime", description: "L'univers captivant de l'animation japonaise", hero: hero4 }
  };

  const current = themeData[theme || "maroc"];
  
  // Mock product data with color and format attributes
  const allProducts = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    image: [hero1, hero2, hero3, hero4][i % 4],
    color: ["rouge", "bleu", "vert", "jaune", "orange", "rose", "violet", "noir"][i % 8],
    format: ["carre", "horizontal", "vertical"][i % 3],
  }));

  // Filter products based on active filters
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesColor = filters.colors.length === 0 || filters.colors.includes(product.color);
      const matchesFormat = filters.formats.length === 0 || filters.formats.includes(product.format);
      return matchesColor && matchesFormat;
    });
  }, [filters]);

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <WhatsAppButton />
      
      <div className="pt-40 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-gradient">{current.title}</h1>
            <p className="text-xl text-muted-foreground">{current.description}</p>
          </motion.div>
          
          <FilterBar filters={filters} onFiltersChange={setFilters} />
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredProducts.map((p, i) => (
                <Link key={i} to={`/product/${p.id}`}>
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: i * 0.1 }} 
                    className="elegant-card overflow-hidden group"
                  >
                    <img 
                      src={p.image} 
                      alt="Art" 
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </motion.div>
                </Link>
              ))}
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
      <FooterTaped />
    </div>
  );
};

export default Theme;
