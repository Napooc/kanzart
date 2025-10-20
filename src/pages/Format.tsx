import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import frameClassic from "@/assets/frame-classic.jpg";
import frameModern from "@/assets/frame-modern.jpg";
import { Check } from "lucide-react";

const Format = () => {
  const frameOptions = [
    {
      title: "Cadre Classique en Bois",
      description: "Élégance intemporelle avec des détails dorés sculptés à la main. Parfait pour les œuvres traditionnelles et les intérieurs classiques.",
      image: frameClassic,
      features: [
        "Bois de qualité supérieure",
        "Finition dorée à la feuille",
        "Protège-verre antireflet",
        "Système d'accrochage inclus"
      ]
    },
    {
      title: "Cadre Moderne en Aluminium",
      description: "Design minimaliste et contemporain. Idéal pour les œuvres modernes et les espaces épurés.",
      image: frameModern,
      features: [
        "Aluminium brossé noir",
        "Profil fin et élégant",
        "Verre acrylique léger",
        "Montage mural facile"
      ]
    }
  ];

  const dimensions = [
    { name: "Petit", size: "30 x 40 cm", ideal: "Bureau, entrée" },
    { name: "Moyen", size: "50 x 70 cm", ideal: "Chambre, salon" },
    { name: "Grand", size: "70 x 100 cm", ideal: "Salon, salle à manger" },
    { name: "Très Grand", size: "100 x 140 cm", ideal: "Pièce principale, hôtel" },
    { name: "Panoramique", size: "40 x 120 cm", ideal: "Au-dessus du canapé" },
    { name: "Sur Mesure", size: "Dimensions personnalisées", ideal: "Espaces spécifiques" }
  ];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      
      <div className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Formats & Cadres</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Personnalisez votre œuvre d'art avec nos cadres premium et dimensions variées. 
              Chaque détail compte pour sublimer votre intérieur.
            </p>
          </motion.div>

          {/* Cadres Section */}
          <section className="mb-32">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Nos Cadres Premium
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {frameOptions.map((frame, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="elegant-card overflow-hidden"
                >
                  <div className="h-80 overflow-hidden">
                    <img
                      src={frame.image}
                      alt={frame.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{frame.title}</h3>
                    <p className="text-muted-foreground mb-6">{frame.description}</p>
                    
                    <ul className="space-y-3">
                      {frame.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Dimensions Section */}
          <section>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Dimensions Disponibles
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dimensions.map((dim, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="elegant-card p-8 text-center"
                >
                  <h3 className="text-2xl font-bold mb-3">{dim.name}</h3>
                  <p className="text-3xl text-gradient font-bold mb-4">{dim.size}</p>
                  <p className="text-muted-foreground">Idéal pour: {dim.ideal}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="gradient-elegant rounded-3xl p-12 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">Besoin d'une dimension spécifique ?</h3>
                <p className="text-xl text-muted-foreground mb-6">
                  Nous créons des tableaux sur mesure adaptés à vos espaces uniques. 
                  Contactez-nous pour discuter de votre projet personnalisé.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      <FooterTaped />
    </div>
  );
};

export default Format;
