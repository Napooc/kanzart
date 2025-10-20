import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import { useParams } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const Theme = () => {
  const { theme } = useParams();
  
  const themeData: Record<string, { title: string; description: string; hero: string }> = {
    maroc: { title: "Mon Maroc", description: "Célébrez la beauté du patrimoine marocain", hero: hero1 },
    islamic: { title: "Art Islamique et Calligraphie", description: "L'élégance de la tradition islamique", hero: hero2 },
    nature: { title: "Nature et Paysage", description: "La beauté naturelle dans votre espace", hero: hero3 },
    vintage: { title: "Antique et Vintage", description: "Le charme intemporel du passé", hero: hero4 },
    bw: { title: "Black and White", description: "L'élégance monochrome", hero: hero1 },
    floral: { title: "Art Floral", description: "La nature en floraison", hero: hero2 },
    texture: { title: "Tableaux Texturés", description: "Relief et profondeur artistique", hero: hero3 },
    world: { title: "Autour du Monde", description: "Voyagez à travers l'art", hero: hero4 }
  };

  const current = themeData[theme || "maroc"];
  const products = Array(8).fill(null).map((_, i) => ({ id: i + 1, image: [hero1, hero2, hero3, hero4][i % 4] }));

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-gradient">{current.title}</h1>
            <p className="text-xl text-muted-foreground">{current.description}</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <motion.a key={i} href={`/product/${p.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="elegant-card overflow-hidden group">
                <img src={p.image} alt="Art" className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <FooterTaped />
    </div>
  );
};

export default Theme;
