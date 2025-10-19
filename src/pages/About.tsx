import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Palette, Heart, Award, Users } from "lucide-react";
import interiorHome from "@/assets/interior-home.jpg";
import interiorOffice from "@/assets/interior-office.jpg";
import interiorHotel from "@/assets/interior-hotel.jpg";

const navItems = [
  { name: "Nouveauté", link: "/nouveaute" },
  { name: "Format", link: "/format" },
  { name: "À propos", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const About = () => {
  const values = [
    {
      icon: Palette,
      title: "Art Authentique",
      description: "Nous célébrons la richesse de l'art marocain contemporain en collaborant avec des artistes locaux talentueux."
    },
    {
      icon: Heart,
      title: "Passion & Qualité",
      description: "Chaque tableau est soigneusement sélectionné et fabriqué avec des matériaux premium pour une durabilité exceptionnelle."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Notre engagement envers l'excellence se reflète dans chaque détail, du choix des œuvres à la livraison finale."
    },
    {
      icon: Users,
      title: "Service Client",
      description: "Une équipe dédiée pour vous accompagner dans votre projet et créer des solutions sur mesure adaptées à vos besoins."
    }
  ];

  const galleries = [
    { image: interiorHome, title: "Espaces Résidentiels", desc: "Transformez votre maison en galerie d'art" },
    { image: interiorOffice, title: "Bureaux Professionnels", desc: "Créez une ambiance inspirante au travail" },
    { image: interiorHotel, title: "Hôtels & Restaurants", desc: "Sublimez vos espaces commerciaux" }
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
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">À Propos de KENZART</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Votre destination privilégiée pour l'art marocain contemporain. 
              Nous donnons vie à vos espaces avec des œuvres uniques et personnalisables.
            </p>
          </motion.div>

          {/* Notre Histoire */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    KENZART est née de la passion pour l'art marocain et du désir de le rendre accessible à tous. 
                    Fondée au cœur de Casablanca, notre galerie en ligne est devenue une référence pour ceux qui cherchent 
                    à décorer leurs espaces avec authenticité et élégance.
                  </p>
                  <p>
                    Nous travaillons avec des artistes marocains talentueux pour vous offrir une collection variée, 
                    allant des motifs traditionnels aux créations contemporaines. Chaque œuvre raconte une histoire, 
                    celle de notre riche patrimoine culturel réinterprété avec modernité.
                  </p>
                  <p>
                    Notre engagement ? Vous proposer des tableaux de qualité exceptionnelle, personnalisables selon vos 
                    envies, livrés avec soin dans tout le Maroc. Parce que l'art ne devrait connaître aucune limite.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="elegant-card overflow-hidden"
              >
                <img
                  src={interiorHome}
                  alt="KENZART Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </section>

          {/* Nos Valeurs */}
          <section className="mb-32">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              Nos Valeurs
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="elegant-card p-8 text-center"
                >
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Nos Réalisations */}
          <section>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              Nos Réalisations
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {galleries.map((gallery, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="elegant-card overflow-hidden group"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={gallery.image}
                      alt={gallery.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{gallery.title}</h3>
                      <p className="text-white/90">{gallery.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="gradient-elegant rounded-3xl p-16 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre espace ?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Découvrez notre collection et laissez-vous inspirer par l'art marocain contemporain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
