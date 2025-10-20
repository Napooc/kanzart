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
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2"
            >
              <Sparkles className="h-12 w-12 text-accent" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              Nouveautés
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos dernières créations artistiques. 
              Chaque tableau est une œuvre unique qui transformera votre espace.
            </p>
          </motion.div>

          {/* Creative Grid Layout */}
          <div className="space-y-12">
            {/* Featured Large Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden group"
            >
              <img 
                src={products[0].image} 
                alt={products[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-12"
              >
                <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-4">
                  Exclusif
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {products[0].title}
                </h2>
                <p className="text-2xl text-white/90 font-semibold mb-6">{products[0].price}</p>
                <a 
                  href={`/product/${products[0].id}`}
                  className="inline-block px-8 py-4 bg-white text-foreground rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Personnaliser
                </a>
              </motion.div>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {products.slice(1, 3).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    link={`/product/${product.id}`}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* Three Column Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {products.slice(3, 6).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
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

            {/* Final Two Cards - Asymmetric */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="md:col-span-2"
              >
                <ProductCard
                  image={products[6].image}
                  title={products[6].title}
                  price={products[6].price}
                  link={`/product/${products[6].id}`}
                  className="h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <ProductCard
                  image={products[7].image}
                  title={products[7].title}
                  price={products[7].price}
                  link={`/product/${products[7].id}`}
                  className="h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Nouveaute;
