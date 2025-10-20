import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import { useParams } from "react-router-dom";
import interiorHome from "@/assets/interior-home.jpg";
import interiorOffice from "@/assets/interior-office.jpg";
import interiorHotel from "@/assets/interior-hotel.jpg";

const Interieur = () => {
  const { type } = useParams();
  
  const interiorData: Record<string, { title: string; description: string; hero: string }> = {
    maison: { title: "Maison", description: "Créez une ambiance chaleureuse chez vous", hero: interiorHome },
    bureau: { title: "Bureau", description: "Inspirez votre espace de travail", hero: interiorOffice },
    "restaurant-hotels": { title: "Restaurant & Hôtels", description: "Impressionnez vos clients", hero: interiorHotel },
    personnalise: { title: "Personnalisé", description: "Solutions sur mesure pour vos besoins", hero: interiorHome }
  };

  const current = interiorData[type || "maison"];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="elegant-card overflow-hidden mb-16">
            <img src={current.hero} alt={current.title} className="w-full h-96 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl font-bold mb-4">{current.title}</h1>
            <p className="text-xl text-muted-foreground">{current.description}</p>
          </motion.div>
        </div>
      </div>
      <FooterTaped />
    </div>
  );
};

export default Interieur;
