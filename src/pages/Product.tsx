import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FooterTaped } from "@/components/FooterTaped";
import { ProductCard } from "@/components/ProductCard";
import { FrameOption, frames } from "@/components/FrameOption";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import themeMaroc from "@/assets/theme-maroc.jpg";
import themeIslamic from "@/assets/theme-islamic.jpg";
const products = [{
  image: hero1,
  title: "Portes Marocaines Traditionnelles",
  price: "2,500 MAD",
  id: "1",
  basePrice: 2500
}, {
  image: hero2,
  title: "Calligraphie Arabe Dorée",
  price: "1,800 MAD",
  id: "2",
  basePrice: 1800
}, {
  image: hero3,
  title: "Coucher de Soleil sur l'Atlas",
  price: "2,200 MAD",
  id: "3",
  basePrice: 2200
}, {
  image: hero4,
  title: "Abstraction en Noir et Blanc",
  price: "1,900 MAD",
  id: "4",
  basePrice: 1900
}, {
  image: hero5,
  title: "Jardin Fleuri Aquarelle",
  price: "1,600 MAD",
  id: "5",
  basePrice: 1600
}, {
  image: hero6,
  title: "Souk Marocain Vintage",
  price: "2,300 MAD",
  id: "6",
  basePrice: 2300
}, {
  image: themeMaroc,
  title: "Mosaïque Marocaine Moderne",
  price: "2,800 MAD",
  id: "7",
  basePrice: 2800
}, {
  image: themeIslamic,
  title: "Art Islamique Géométrique",
  price: "2,600 MAD",
  id: "8",
  basePrice: 2600
}];
const dimensions = [{
  id: "small",
  width: 40,
  height: 60,
  label: "40x60 cm",
  multiplier: 1
}, {
  id: "medium",
  width: 60,
  height: 80,
  label: "60x80 cm",
  multiplier: 1.5
}, {
  id: "large",
  width: 80,
  height: 120,
  label: "80x120 cm",
  multiplier: 2
}, {
  id: "xlarge",
  width: 100,
  height: 150,
  label: "100x150 cm",
  multiplier: 2.5
}];
const Product = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [selectedFrame, setSelectedFrame] = useState(frames[0]);
  const [selectedDimension, setSelectedDimension] = useState(dimensions[1]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const {
    addItem
  } = useCart();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Produit non trouvé</h1>
      </div>;
  }
  const similarProducts = products.filter(p => p.id !== id).slice(0, 3);
  const totalPrice = (product.basePrice * selectedDimension.multiplier + selectedFrame.price) * quantity;
  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      productId: product.id,
      title: product.title,
      image: product.image,
      basePrice: product.basePrice,
      frameId: selectedFrame.id,
      frameName: selectedFrame.name,
      framePrice: selectedFrame.price,
      dimensionId: selectedDimension.id,
      dimensionLabel: selectedDimension.label,
      dimensionMultiplier: selectedDimension.multiplier,
      quantity,
      totalPrice
    });
    toast({
      title: "✨ Ajouté au panier !",
      description: `${product.title} a été ajouté à votre panier`,
      duration: 3000
    });
    setTimeout(() => setIsAdding(false), 1000);
  };
  return <div className="min-h-screen">
      {/* Fixed Back Button */}
      <motion.div initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} className="fixed top-8 left-8 z-50">
        <Button onClick={() => navigate(-1)} size="lg" className="rounded-full shadow-elegant glass-effect hover:scale-105 transition-all duration-300 group text-left text-black bg-yellow-500 hover:bg-yellow-400">
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour
        </Button>
      </motion.div>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Compact Header */}
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-3xl md:text-4xl font-bold text-gradient">
              {totalPrice.toLocaleString()} MAD
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 mb-16">
            {/* Left: Compact Live Preview */}
            <div className="lg:col-span-3">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-6">
                <div className="rounded-xl bg-gradient-to-br from-background to-secondary/20 p-6 shadow-lg">
                  <div className={`relative mx-auto transition-all duration-500 ${selectedFrame.borderClass}`} style={{
                  maxWidth: "360px",
                  aspectRatio: `${selectedDimension.width}/${selectedDimension.height}`,
                  padding: `${selectedFrame.padding}px`
                }}>
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover shadow-lg" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">Aperçu en direct • {selectedDimension.label}</p>
                  </div>
                </div>
              </motion.div>

              {/* Frames Selection */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }}>
                <h3 className="text-lg font-semibold mb-3">Type de Cadre</h3>
                <div className="grid grid-cols-4 gap-3">
                  {frames.map(frame => <FrameOption key={frame.id} {...frame} isSelected={selectedFrame.id === frame.id} onClick={() => setSelectedFrame(frame)} />)}
                </div>
              </motion.div>
            </div>

            {/* Right: Compact Options */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="lg:col-span-2 space-y-5">
              {/* Dimensions */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Dimensions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {dimensions.map(dim => <button key={dim.id} onClick={() => setSelectedDimension(dim)} className={`rounded-lg p-3 text-left transition-all duration-300 border ${selectedDimension.id === dim.id ? "border-accent bg-accent/5 shadow-md" : "border-border bg-card hover:bg-secondary/30"}`}>
                      <p className="font-semibold text-sm">{dim.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {(product.basePrice * dim.multiplier).toLocaleString()} MAD
                      </p>
                    </button>)}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quantité</h3>
                <div className="flex items-center justify-between rounded-lg border bg-card p-3">
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-10 w-10 rounded-full">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-bold">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10 rounded-full">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button className="w-full h-14 text-base font-semibold gradient-primary hover:opacity-90 transition-all relative overflow-hidden group" onClick={handleAddToCart} disabled={isAdding}>
                <motion.div initial={false} animate={{
                scale: isAdding ? [1, 1.2, 1] : 1
              }} transition={{
                duration: 0.4
              }} className="flex items-center gap-2">
                  {isAdding ? <>
                      <Check className="h-5 w-5" />
                      Ajouté !
                    </> : <>
                      <ShoppingCart className="h-5 w-5" />
                      Ajouter au Panier
                    </>}
                </motion.div>
                
                {isAdding && <motion.div initial={{
                scale: 0,
                opacity: 1
              }} animate={{
                scale: 3,
                opacity: 0
              }} transition={{
                duration: 0.6
              }} className="absolute inset-0 rounded-full bg-white/30" />}
              </Button>

              {/* Compact Description */}
              <div className="rounded-lg border bg-card p-4">
                <h3 className="text-base font-semibold mb-2">Description</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Œuvre imprimée sur toile canvas premium avec encres UV résistantes. 
                  Fabrication locale au Maroc avec qualité garantie.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Similar Products */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="mt-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Œuvres Similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProducts.map(similar => <ProductCard key={similar.id} image={similar.image} title={similar.title} link={`/product/${similar.id}`} />)}
            </div>
          </motion.div>

          {/* SEO Content */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="mt-20 elegant-card p-12">
            <h2 className="text-3xl font-bold mb-6">Pourquoi Choisir KANZART?</h2>
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
    </div>;
};
export default Product;