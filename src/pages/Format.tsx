import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { motion, useScroll, useTransform } from "framer-motion";
import { navItems } from "@/config/navigation";
import frameClassic from "@/assets/frame-classic.jpg";
import frameModern from "@/assets/frame-modern.jpg";
import { Check, Ruler, Frame, Sparkles, Palette, Shield } from "lucide-react";
import { useRef } from "react";
const Format = () => {
  const heroRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const frameOptions = [{
    title: "Cadre Classique en Bois",
    description: "Élégance intemporelle avec des détails dorés sculptés à la main. Parfait pour les œuvres traditionnelles et les intérieurs classiques.",
    image: frameClassic,
    features: ["Bois de qualité supérieure", "Finition dorée à la feuille", "Protège-verre antireflet", "Système d'accrochage inclus"]
  }, {
    title: "Cadre Moderne en Aluminium",
    description: "Design minimaliste et contemporain. Idéal pour les œuvres modernes et les espaces épurés.",
    image: frameModern,
    features: ["Aluminium brossé noir", "Profil fin et élégant", "Verre acrylique léger", "Montage mural facile"]
  }];
  const dimensions = [{
    name: "Petit",
    size: "30 x 40 cm",
    width: 30,
    height: 40,
    ideal: "Bureau, entrée",
    icon: Ruler
  }, {
    name: "Moyen",
    size: "50 x 70 cm",
    width: 50,
    height: 70,
    ideal: "Chambre, salon",
    icon: Frame
  }, {
    name: "Grand",
    size: "70 x 100 cm",
    width: 70,
    height: 100,
    ideal: "Salon, salle à manger",
    icon: Frame
  }, {
    name: "Très Grand",
    size: "100 x 140 cm",
    width: 100,
    height: 140,
    ideal: "Pièce principale, hôtel",
    icon: Frame
  }, {
    name: "Panoramique",
    size: "40 x 120 cm",
    width: 40,
    height: 120,
    ideal: "Au-dessus du canapé",
    icon: Frame
  }, {
    name: "Sur Mesure",
    size: "Dimensions personnalisées",
    width: 100,
    height: 100,
    ideal: "Espaces spécifiques",
    icon: Sparkles
  }];
  const benefits = [{
    icon: Shield,
    title: "Qualité Premium",
    description: "Matériaux nobles sélectionnés avec soin"
  }, {
    icon: Palette,
    title: "Personnalisation",
    description: "Adaptez chaque détail à votre vision"
  }, {
    icon: Sparkles,
    title: "Finitions Luxe",
    description: "Détails raffinés pour un rendu exceptionnel"
  }];
  return <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <motion.section ref={heroRef} style={{
      opacity,
      scale
    }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-elegant">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity
        }} className="absolute inset-0" style={{
          background: "radial-gradient(circle at 30% 50%, hsl(var(--accent) / 0.1), transparent 50%)"
        }} />
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: [0.2, 0.4, 0.2]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1
        }} className="absolute inset-0" style={{
          background: "radial-gradient(circle at 70% 50%, hsl(var(--terracotta) / 0.08), transparent 50%)"
        }} />
        </div>

        <motion.div style={{
        y
      }} className="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="inline-block">
              <Frame className="w-20 h-20 text-accent mx-auto mb-6 animate-float" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Formats & Cadres
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Sublimez vos œuvres avec des cadres d'exception et des dimensions parfaitement adaptées à votre espace
            </p>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }} className="flex flex-wrap justify-center gap-4 pt-8">
              {benefits.map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8 + index * 0.1
            }} className="glass-effect px-6 py-4 rounded-2xl flex items-center gap-3">
                  <benefit.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium">{benefit.title}</span>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2
      }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Cadres Premium Section */}
      <section className="py-32 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <motion.div initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} className="inline-block mb-6">
              <Ruler className="w-12 h-12 text-accent mx-auto" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Nos Cadres Premium</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chaque cadre est soigneusement conçu pour mettre en valeur votre art
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {frameOptions.map((frame, index) => <motion.article key={index} initial={{
            opacity: 0,
            x: index === 0 ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} className="group relative">
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Image Container */}
                  <div className="relative h-[500px] overflow-hidden">
                    <motion.img src={frame.image} alt={frame.title} className="w-full h-full object-cover" whileHover={{
                  scale: 1.1
                }} transition={{
                  duration: 0.6
                }} />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Content */}
                    <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileHover={{
                  opacity: 1,
                  y: 0
                }} className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="text-primary-foreground">
                        <h3 className="text-3xl font-bold mb-3">{frame.title}</h3>
                        <p className="text-primary-foreground/90 text-lg">{frame.description}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Features Card */}
                  <div className="glass-effect p-8 -mt-20 relative z-10 mx-6 rounded-2xl">
                    <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      Caractéristiques
                    </h4>
                    <ul className="space-y-4">
                      {frame.features.map((feature, i) => <motion.li key={i} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: i * 0.1
                  }} className="flex items-center gap-3 group/item">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover/item:bg-accent/20 transition-colors">
                            <Check className="h-5 w-5 text-accent" />
                          </div>
                          <span className="text-foreground/90">{feature}</span>
                        </motion.li>)}
                    </ul>
                  </div>
                </div>
              </motion.article>)}
          </div>
        </div>
      </section>

      {/* Dimensions Section */}
      <section className="py-32 px-4 gradient-elegant relative">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Dimensions Disponibles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Du format intimiste au format monumental, trouvez la taille parfaite pour votre espace
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {dimensions.map((dim, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} className="relative group">
                <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-500 h-full">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
                  </div>

                  {/* Visual Frame Representation */}
                  <div className="relative p-8">
                    <div className="flex items-center justify-center mb-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                        style={{
                          width: `${Math.min(dim.width * 1.2, 120)}px`,
                          height: `${Math.min(dim.height * 1.2, 120)}px`,
                        }}
                      >
                        {/* Frame border representation */}
                        <div className="absolute inset-0 border-4 border-accent/30 rounded-lg shadow-elegant">
                          <div className="absolute inset-2 border-2 border-accent/20 rounded-sm" />
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                        </div>
                        
                        {/* Icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <dim.icon className="w-8 h-8 text-accent" />
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-2xl font-bold mb-2">{dim.name}</h3>
                      <div className="text-3xl font-bold text-accent mb-4">{dim.size}</div>
                      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                      <p className="text-muted-foreground text-sm">
                        <span className="font-semibold text-foreground block mb-1">Idéal pour:</span>
                        {dim.ideal}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/10 group-hover:border-accent/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/10 group-hover:border-accent/40 transition-colors duration-500" />
                </div>
              </motion.div>)}
          </div>

          {/* Custom Size CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 gradient-primary opacity-90" />
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 animate-shimmer" style={{
                backgroundImage: `linear-gradient(90deg, transparent, hsl(var(--primary-foreground) / 0.2), transparent)`,
                backgroundSize: '200% 100%'
              }} />
              </div>
              
              <div className="relative z-10 p-16 text-center text-primary-foreground">
                
                
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Besoin d'une dimension spécifique ?
                </h3>
                <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
                  Notre atelier crée des œuvres sur mesure parfaitement adaptées à votre espace. 
                  Chaque centimètre compte pour un rendu exceptionnel.
                </p>
                
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="glass-effect px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-foreground/30 hover:border-primary-foreground/60 transition-colors text-neutral-950">
                  Demander un devis personnalisé
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterTaped />
    </div>;
};
export default Format;