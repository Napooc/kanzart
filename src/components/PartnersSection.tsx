import { motion } from "framer-motion";
import kenzartLogo from "@/assets/kenzart-logo.png";

const partners = [
  "Musée d'Art",
  "Galerie Hassan",
  "Art Maroc",
  "Design Studio",
  "Craft Morocco",
  "Royal Arts",
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Partenaires de Confiance
        </h2>
        
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center"
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={kenzartLogo}
                  alt={`Partner ${index + 1}`}
                  className="h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
