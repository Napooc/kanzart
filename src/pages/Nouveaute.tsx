import { FloatingNav } from "@/components/FloatingNav";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import themeMaroc from "@/assets/theme-maroc.jpg";
import themeIslamic from "@/assets/theme-islamic.jpg";

const navItems = [
  { name: "Nouveauté", link: "/nouveaute" },
  {
    name: "Thème",
    dropdownItems: [
      { name: "Mon Maroc", link: "/theme/maroc" },
      { name: "Art Islamique et calligraphie", link: "/theme/islamic" },
      { name: "Nature et paysage", link: "/theme/nature" },
      { name: "Antique et vintage", link: "/theme/vintage" },
      { name: "Black and white", link: "/theme/bw" },
      { name: "Art floral", link: "/theme/floral" },
      { name: "Tableaux texturés", link: "/theme/texture" },
      { name: "Autour du Monde", link: "/theme/world" },
    ],
  },
  {
    name: "Couleur",
    dropdownItems: [
      { name: "Rouge", link: "/couleur/rouge" },
      { name: "Bleu", link: "/couleur/bleu" },
      { name: "Vert", link: "/couleur/vert" },
      { name: "Jaune", link: "/couleur/jaune" },
      { name: "Noir & Blanc", link: "/couleur/noir-blanc" },
    ],
  },
  { name: "Format", link: "/format" },
  { name: "À propos", link: "/about" },
  { name: "Contact", link: "/contact" },
];

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
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Nouveautés</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos dernières créations artistiques. 
              Chaque tableau est une œuvre unique qui transformera votre espace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  link={`/product/${product.id}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Nouveaute;
