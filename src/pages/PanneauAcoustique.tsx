import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { navItems } from "@/config/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Waves, Shield, Leaf, Sparkles, X } from "lucide-react";

const acousticPanels = [
  {
    id: 1,
    name: "Harmonie Murale",
    description: "Panneau acoustique premium avec motifs géométriques élégants",
    features: ["Absorption acoustique supérieure", "Design moderne", "Installation facile"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 2,
    name: "Silence Doré",
    description: "Élégance et performance acoustique dans un design sophistiqué",
    features: ["Finition premium", "Réduction du bruit jusqu'à 85%", "Matériaux écologiques"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 3,
    name: "Onde Sereine",
    description: "Design ondulé pour une esthétique moderne et apaisante",
    features: ["Effet 3D unique", "Haute performance acoustique", "Personnalisable"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 4,
    name: "Écho Minimaliste",
    description: "Simplicité épurée pour espaces contemporains",
    features: ["Design épuré", "Installation modulaire", "Durabilité garantie"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 5,
    name: "Refuge Acoustique",
    description: "Confort sonore maximal pour vos espaces de travail",
    features: ["Absorption optimale", "Design ergonomique", "Certification ISO"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 6,
    name: "Zenith Premium",
    description: "Le summum de l'excellence acoustique et esthétique",
    features: ["Technologie avancée", "Design sur mesure", "Garantie 10 ans"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 7,
    name: "Cascade Sonore",
    description: "Panneaux verticaux pour une absorption optimale",
    features: ["Design vertical innovant", "Performance exceptionnelle", "Facile à entretenir"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 8,
    name: "Aura Élégante",
    description: "Sophistication et technologie au service du confort",
    features: ["Finition luxueuse", "Technologie anti-bruit", "Design intemporel"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 9,
    name: "Cosmos Acoustique",
    description: "Inspiration cosmique pour un design hors du commun",
    features: ["Motifs uniques", "Performance certifiée", "Éclairage LED intégré"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
];

const PanneauAcoustique = () => {
  const [selectedPanel, setSelectedPanel] = useState<typeof acousticPanels[0] | null>(null);
  const whatsappNumber = "+212123456789";

  const handleWhatsAppContact = () => {
    const message = selectedPanel
      ? `Bonjour, je suis intéressé par le panneau acoustique "${selectedPanel.name}". Pouvez-vous me fournir plus d'informations?`
      : "Bonjour, je souhaite obtenir des informations sur vos panneaux acoustiques.";
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3), transparent 50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "hsl(var(--primary) / 0.2)" }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "hsl(var(--accent) / 0.2)" }}
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Waves className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Technologie Acoustique Avancée</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
              Panneaux Acoustiques Premium
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transformez vos espaces avec nos solutions acoustiques haut de gamme. 
              Design exceptionnel et performance sonore inégalée.
            </p>

            <div className="flex flex-wrap gap-8 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
              >
                <Shield className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Garantie</p>
                  <p className="font-semibold">10 Ans</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
              >
                <Leaf className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Matériaux</p>
                  <p className="font-semibold">Écologiques</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
              >
                <Sparkles className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Design</p>
                  <p className="font-semibold">Sur Mesure</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Collection
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez nos panneaux acoustiques premium
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acousticPanels.map((panel, index) => (
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPanel(panel)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={panel.image}
                      alt={panel.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Premium Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="absolute top-4 left-4 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm"
                    >
                      <span className="text-xs font-semibold text-primary-foreground">Premium</span>
                    </motion.div>

                    {/* View Details Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Button className="w-full bg-primary/90 backdrop-blur-sm hover:bg-primary">
                        Voir les détails
                      </Button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {panel.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {panel.description}
                    </p>
                    
                    <div className="space-y-2">
                      {panel.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Besoin d'un Conseil Personnalisé?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nos experts sont à votre disposition pour vous guider dans votre choix
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleWhatsAppContact}
                className="text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactez-nous sur WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedPanel && (
          <Dialog open={!!selectedPanel} onOpenChange={() => setSelectedPanel(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-4">
                  {selectedPanel.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative h-96 rounded-xl overflow-hidden"
                >
                  <img
                    src={selectedPanel.image}
                    alt={selectedPanel.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">
                    {selectedPanel.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
                  <div className="grid gap-3">
                    {selectedPanel.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 border border-border"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                >
                  <h3 className="text-xl font-semibold mb-2">Intéressé par ce produit?</h3>
                  <p className="text-muted-foreground mb-4">
                    Contactez-nous via WhatsApp pour obtenir un devis personnalisé et des informations détaillées
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleWhatsAppContact}
                      className="flex-1 bg-gradient-to-r from-primary to-primary/80"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleWhatsAppContact}
                      className="flex-1"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </Button>
                  </div>
                </motion.div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <FooterTaped />
    </div>
  );
};

export default PanneauAcoustique;
