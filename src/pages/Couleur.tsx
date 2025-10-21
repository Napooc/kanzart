import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { ProductCard } from "@/components/ProductCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { navItems } from "@/config/navigation";
import { useParams, Navigate } from "react-router-dom";
import { useRef } from "react";
import { Palette, Sparkles, Heart, TrendingUp, Filter } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

const Couleur = () => {
  const { color } = useParams<{ color: string }>();
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Color configurations with SEO-rich content
  const colorConfig: Record<string, {
    name: string;
    hex: string;
    gradient: string;
    description: string;
    emotion: string;
    ideal: string[];
    characteristics: string[];
    hsl: string;
  }> = {
    rouge: {
      name: "Rouge",
      hex: "#DC2626",
      hsl: "0 72% 51%",
      gradient: "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #F87171 100%)",
      description: "Le rouge évoque la passion, l'énergie et la chaleur. Symbole de force et de vie, il apporte dynamisme et caractère à votre intérieur.",
      emotion: "Passion • Énergie • Audace",
      ideal: ["Salon moderne", "Salle à manger", "Bureau créatif", "Chambre romantique"],
      characteristics: [
        "Stimule l'énergie et la conversation",
        "Crée un point focal puissant",
        "Symbolise la passion et la chaleur",
        "Idéal pour les espaces sociaux"
      ]
    },
    bleu: {
      name: "Bleu",
      hex: "#2563EB",
      hsl: "217 91% 60%",
      gradient: "linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #3B82F6 100%)",
      description: "Le bleu inspire calme et sérénité. Couleur de la mer et du ciel, il apporte paix et profondeur à votre espace de vie.",
      emotion: "Calme • Sérénité • Confiance",
      ideal: ["Chambre à coucher", "Bureau professionnel", "Salle de bain", "Espace méditation"],
      characteristics: [
        "Favorise la relaxation et la concentration",
        "Évoque la stabilité et la confiance",
        "Agrandit visuellement l'espace",
        "Parfait pour les zones de repos"
      ]
    },
    vert: {
      name: "Vert",
      hex: "#16A34A",
      hsl: "142 71% 45%",
      gradient: "linear-gradient(135deg, #15803D 0%, #16A34A 50%, #22C55E 100%)",
      description: "Le vert symbolise la nature et l'harmonie. Il apporte fraîcheur et équilibre, créant une atmosphère apaisante et revigorante.",
      emotion: "Nature • Harmonie • Renouveau",
      ideal: ["Cuisine", "Salle de séjour", "Bureau à domicile", "Espace wellness"],
      characteristics: [
        "Connecte avec la nature",
        "Réduit le stress et favorise l'équilibre",
        "Stimule la créativité",
        "Apporte fraîcheur et vitalité"
      ]
    },
    jaune: {
      name: "Jaune",
      hex: "#EAB308",
      hsl: "45 93% 47%",
      gradient: "linear-gradient(135deg, #CA8A04 0%, #EAB308 50%, #FDE047 100%)",
      description: "Le jaune rayonne de lumière et d'optimisme. Couleur du soleil, il illumine votre intérieur et stimule la créativité et la joie.",
      emotion: "Optimisme • Joie • Créativité",
      ideal: ["Cuisine lumineuse", "Atelier créatif", "Chambre d'enfant", "Hall d'entrée"],
      characteristics: [
        "Stimule l'optimisme et la créativité",
        "Illumine et agrandit l'espace",
        "Favorise la communication",
        "Apporte chaleur et énergie positive"
      ]
    },
    orange: {
      name: "Orange",
      hex: "#EA580C",
      hsl: "20 91% 48%",
      gradient: "linear-gradient(135deg, #C2410C 0%, #EA580C 50%, #FB923C 100%)",
      description: "L'orange combine l'énergie du rouge et la joie du jaune. Chaleureux et accueillant, il crée une atmosphère conviviale et dynamique.",
      emotion: "Chaleur • Convivialité • Vitalité",
      ideal: ["Salle à manger", "Espace de réception", "Cuisine ouverte", "Salon familial"],
      characteristics: [
        "Stimule l'appétit et la socialisation",
        "Crée une ambiance chaleureuse",
        "Favorise l'enthousiasme",
        "Parfait pour les espaces conviviaux"
      ]
    },
    rose: {
      name: "Rose",
      hex: "#EC4899",
      hsl: "330 81% 60%",
      gradient: "linear-gradient(135deg, #DB2777 0%, #EC4899 50%, #F472B6 100%)",
      description: "Le rose incarne douceur et romantisme. Tendre et élégant, il apporte une touche de raffinement et de féminité à votre décoration.",
      emotion: "Douceur • Romance • Élégance",
      ideal: ["Chambre romantique", "Dressing", "Salon cosy", "Espace beauté"],
      characteristics: [
        "Crée une atmosphère douce et apaisante",
        "Évoque la romance et la délicatesse",
        "Apporte sophistication et modernité",
        "Idéal pour les espaces intimes"
      ]
    },
    violet: {
      name: "Violet",
      hex: "#9333EA",
      hsl: "271 81% 56%",
      gradient: "linear-gradient(135deg, #7E22CE 0%, #9333EA 50%, #A855F7 100%)",
      description: "Le violet allie force et spiritualité. Mystérieux et raffiné, il inspire créativité et contemplation, parfait pour les esprits créatifs.",
      emotion: "Mystère • Créativité • Luxe",
      ideal: ["Chambre zen", "Atelier artistique", "Bibliothèque", "Salle de yoga"],
      characteristics: [
        "Stimule l'imagination et la spiritualité",
        "Évoque le luxe et le raffinement",
        "Favorise la méditation",
        "Apporte sophistication et originalité"
      ]
    },
    noir: {
      name: "Noir",
      hex: "#171717",
      hsl: "0 0% 9%",
      gradient: "linear-gradient(135deg, #000000 0%, #171717 50%, #262626 100%)",
      description: "Le noir incarne élégance intemporelle et sophistication absolue. Puissant et raffiné, il sublime votre décoration avec caractère et modernité.",
      emotion: "Élégance • Sophistication • Puissance",
      ideal: ["Salon contemporain", "Bureau executive", "Chambre moderne", "Galerie d'art"],
      characteristics: [
        "Crée un contraste saisissant",
        "Évoque luxe et sophistication",
        "Met en valeur les autres couleurs",
        "Apporte profondeur et caractère"
      ]
    }
  };

  if (!color || !colorConfig[color]) {
    return <Navigate to="/404" replace />;
  }

  const currentColor = colorConfig[color];

  // Mock products - in a real app, these would be filtered from a database
  const products = [
    { image: hero1, title: `Abstrait ${currentColor.name}`, link: "/product/1" },
    { image: hero2, title: `Moderne ${currentColor.name}`, link: "/product/2" },
    { image: hero3, title: `Classique ${currentColor.name}`, link: "/product/3" },
    { image: hero4, title: `Géométrique ${currentColor.name}`, link: "/product/4" },
    { image: hero5, title: `Nature ${currentColor.name}`, link: "/product/5" },
    { image: hero6, title: `Artistique ${currentColor.name}`, link: "/product/6" },
  ];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      
      {/* Dynamic Hero Section with Color Theme */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Color Background */}
        <div className="absolute inset-0" style={{ background: `hsl(${currentColor.hsl} / 0.05)` }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 50%, hsl(${currentColor.hsl} / 0.15), transparent 60%)`
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 70% 50%, hsl(${currentColor.hsl} / 0.12), transparent 60%)`
            }}
          />
          
          {/* Floating Color Orbs */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: currentColor.gradient }}
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: currentColor.gradient }}
          />
        </div>

        <motion.div
          style={{ y }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Color Swatch */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center justify-center mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{ background: currentColor.gradient, opacity: 0.4 }}
                />
                <div
                  className="relative w-32 h-32 rounded-full border-4 border-white shadow-elegant"
                  style={{ background: currentColor.gradient }}
                >
                  <Palette className="absolute inset-0 m-auto w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Collection {currentColor.name}
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-medium mb-4"
              style={{ color: `hsl(${currentColor.hsl})` }}
            >
              {currentColor.emotion}
            </motion.p>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {currentColor.description}
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 pt-8"
            >
              <div className="glass-effect px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" style={{ color: `hsl(${currentColor.hsl})` }} />
                  <span className="font-medium">127 Œuvres</span>
                </div>
              </div>
              <div className="glass-effect px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5" style={{ color: `hsl(${currentColor.hsl})` }} />
                  <span className="font-medium">Top Tendance</span>
                </div>
              </div>
              <div className="glass-effect px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5" style={{ color: `hsl(${currentColor.hsl})` }} />
                  <span className="font-medium">Bestseller 2024</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full flex items-start justify-center p-2"
            style={{ 
              border: `2px solid hsl(${currentColor.hsl})`,
            }}
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: `hsl(${currentColor.hsl})` }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Color Psychology Section */}
      <section className="py-32 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(${currentColor.hsl}) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Pourquoi choisir le {currentColor.name} ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez les bienfaits et caractéristiques de cette couleur exceptionnelle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Characteristics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Filter style={{ color: `hsl(${currentColor.hsl})` }} className="w-8 h-8" />
                Caractéristiques
              </h3>
              <ul className="space-y-4">
                {currentColor.characteristics.map((char, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ background: `hsl(${currentColor.hsl})` }}
                    />
                    <span className="text-lg text-foreground/90">{char}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Ideal Spaces */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles style={{ color: `hsl(${currentColor.hsl})` }} className="w-8 h-8" />
                Espaces Idéaux
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentColor.ideal.map((space, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl p-6 text-center border-2 transition-all duration-300"
                    style={{
                      borderColor: `hsl(${currentColor.hsl} / 0.2)`,
                      background: `hsl(${currentColor.hsl} / 0.05)`
                    }}
                  >
                    <span className="text-lg font-medium">{space}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 px-4 gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Tableaux {currentColor.name}s
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une sélection exclusive de tableaux dans les tons {currentColor.name.toLowerCase()}s
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="absolute inset-0 opacity-90"
                style={{ background: currentColor.gradient }}
              />
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0 animate-shimmer"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                    backgroundSize: '200% 100%'
                  }}
                />
              </div>
              
              <div className="relative z-10 p-16 text-center text-white">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Besoin d'un conseil couleur ?
                </h3>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
                  Notre équipe d'experts vous aide à choisir la parfaite harmonie de couleurs pour votre espace
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/60 transition-colors text-neutral-950"
                >
                  Contacter un expert
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterTaped />
    </div>
  );
};

export default Couleur;