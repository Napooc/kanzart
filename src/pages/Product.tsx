import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import themeMaroc from "@/assets/theme-maroc.jpg";
import themeIslamic from "@/assets/theme-islamic.jpg";

const products = [
  { image: hero1, title: "Portes Marocaines Traditionnelles", price: "2,500 MAD", id: "1", basePrice: 2500 },
  { image: hero2, title: "Calligraphie Arabe Dorée", price: "1,800 MAD", id: "2", basePrice: 1800 },
  { image: hero3, title: "Coucher de Soleil sur l'Atlas", price: "2,200 MAD", id: "3", basePrice: 2200 },
  { image: hero4, title: "Abstraction en Noir et Blanc", price: "1,900 MAD", id: "4", basePrice: 1900 },
  { image: hero5, title: "Jardin Fleuri Aquarelle", price: "1,600 MAD", id: "5", basePrice: 1600 },
  { image: hero6, title: "Souk Marocain Vintage", price: "2,300 MAD", id: "6", basePrice: 2300 },
  { image: themeMaroc, title: "Mosaïque Marocaine Moderne", price: "2,800 MAD", id: "7", basePrice: 2800 },
  { image: themeIslamic, title: "Art Islamique Géométrique", price: "2,600 MAD", id: "8", basePrice: 2600 },
];

const frames = [
  {
    id: "modern",
    name: "Cadre Moderne",
    price: 200,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Crect x='10' y='10' width='280' height='380' fill='white'/%3E%3Crect x='15' y='15' width='270' height='370' fill='%23e0e0e0'/%3E%3C/svg%3E",
    description: "Cadre minimaliste en aluminium brossé"
  },
  {
    id: "classic",
    name: "Cadre Classique",
    price: 350,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect width='300' height='400' fill='%238B4513'/%3E%3Crect x='20' y='20' width='260' height='360' fill='white'/%3E%3Crect x='25' y='25' width='250' height='350' fill='%23f5f5dc'/%3E%3C/svg%3E",
    description: "Cadre en bois sculpté doré"
  },
  {
    id: "floating",
    name: "Cadre Flottant",
    price: 300,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect width='300' height='400' fill='white'/%3E%3Crect x='5' y='5' width='290' height='390' fill='%23333'/%3E%3Crect x='10' y='10' width='280' height='380' fill='white'/%3E%3C/svg%3E",
    description: "Effet flottant avec bordure noire fine"
  },
  {
    id: "none",
    name: "Sans Cadre",
    price: 0,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect width='300' height='400' fill='%23f9f9f9'/%3E%3C/svg%3E",
    description: "Toile montée sans cadre"
  },
];

const dimensions = [
  { id: "small", width: 40, height: 60, label: "40x60 cm", multiplier: 1 },
  { id: "medium", width: 60, height: 80, label: "60x80 cm", multiplier: 1.5 },
  { id: "large", width: 80, height: 120, label: "80x120 cm", multiplier: 2 },
  { id: "xlarge", width: 100, height: 150, label: "100x150 cm", multiplier: 2.5 },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedFrame, setSelectedFrame] = useState(frames[0]);
  const [selectedDimension, setSelectedDimension] = useState(dimensions[1]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Produit non trouvé</h1>
      </div>
    );
  }

  const similarProducts = products.filter((p) => p.id !== id).slice(0, 3);
  const totalPrice = (product.basePrice * selectedDimension.multiplier + selectedFrame.price) * quantity;

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Live Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="elegant-card p-8 bg-gradient-to-br from-background to-secondary/20">
                <div 
                  className="relative mx-auto transition-all duration-500"
                  style={{
                    maxWidth: `${selectedDimension.width * 3}px`,
                    aspectRatio: `${selectedDimension.width}/${selectedDimension.height}`,
                  }}
                >
                  {selectedFrame.id !== "none" && (
                    <div 
                      className="absolute inset-0 -m-4 rounded-lg shadow-2xl"
                      style={{
                        backgroundImage: `url("${selectedFrame.image}")`,
                        backgroundSize: "100% 100%",
                        padding: selectedFrame.id === "floating" ? "12px" : "20px",
                      }}
                    />
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="relative w-full h-full object-cover rounded-lg shadow-xl"
                    style={{
                      margin: selectedFrame.id === "floating" ? "12px" : selectedFrame.id === "none" ? "0" : "20px",
                    }}
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">Aperçu en direct</p>
                  <p className="text-lg font-semibold mt-2">{selectedDimension.label}</p>
                </div>
              </div>
            </motion.div>

            {/* Customization Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-gradient mb-8">
                {totalPrice.toLocaleString()} MAD
              </p>

              {/* Dimensions */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Dimensions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {dimensions.map((dim) => (
                    <button
                      key={dim.id}
                      onClick={() => setSelectedDimension(dim)}
                      className={`elegant-card p-4 text-center transition-all duration-300 ${
                        selectedDimension.id === dim.id
                          ? "ring-2 ring-accent scale-105"
                          : "hover:scale-102"
                      }`}
                    >
                      <p className="font-semibold">{dim.label}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {(product.basePrice * dim.multiplier).toLocaleString()} MAD
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Frames */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Type de Cadre</h3>
                <div className="grid grid-cols-2 gap-4">
                  {frames.map((frame) => (
                    <button
                      key={frame.id}
                      onClick={() => setSelectedFrame(frame)}
                      className={`elegant-card p-4 transition-all duration-300 ${
                        selectedFrame.id === frame.id
                          ? "ring-2 ring-accent scale-105"
                          : "hover:scale-102"
                      }`}
                    >
                      <div 
                        className="w-full h-32 mb-3 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url("${frame.image}")` }}
                      />
                      <p className="font-semibold">{frame.name}</p>
                      <p className="text-sm text-muted-foreground">{frame.description}</p>
                      <p className="text-accent font-semibold mt-2">
                        {frame.price > 0 ? `+${frame.price} MAD` : "Inclus"}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Quantité</h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-12 w-12"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-12 w-12"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button className="w-full h-14 text-lg gradient-primary hover:opacity-90 transition-opacity">
                Ajouter au Panier - {totalPrice.toLocaleString()} MAD
              </Button>

              {/* Product Description */}
              <div className="mt-12 elegant-card p-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cette œuvre d'art exceptionnelle apportera une touche d'élégance à votre intérieur. 
                  Imprimée sur toile canvas de qualité premium avec des encres résistantes aux UV, 
                  chaque détail est reproduit avec une fidélité remarquable. Nos tableaux sont fabriqués 
                  au Maroc avec le plus grand soin pour garantir une qualité optimale.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Similar Products */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Œuvres Similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProducts.map((similar) => (
                <ProductCard
                  key={similar.id}
                  image={similar.image}
                  title={similar.title}
                  price={similar.price}
                  link={`/product/${similar.id}`}
                />
              ))}
            </div>
          </motion.div>

          {/* SEO Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 elegant-card p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Pourquoi Choisir KENZART?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Qualité Premium</h3>
                <p className="text-muted-foreground">
                  Nos tableaux sont imprimés sur toile canvas professionnelle avec des encres 
                  écologiques de haute qualité garantissant des couleurs vives et durables.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Fabrication Locale</h3>
                <p className="text-muted-foreground">
                  Chaque œuvre est fabriquée au Maroc par des artisans qualifiés, 
                  combinant savoir-faire traditionnel et techniques modernes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Livraison Rapide</h3>
                <p className="text-muted-foreground">
                  Livraison gratuite partout au Maroc sous 5-7 jours ouvrables. 
                  Emballage soigné pour garantir l'arrivée en parfait état.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <FooterTaped />
    </div>
  );
};

export default Product;
