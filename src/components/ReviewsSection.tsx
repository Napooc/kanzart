import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amina El Fassi",
    rating: 5,
    text: "Tableaux magnifiques et service impeccable. La qualité des cadres est exceptionnelle !",
  },
  {
    name: "Karim Benjelloun",
    rating: 5,
    text: "J'ai personnalisé plusieurs tableaux pour mon bureau. Le résultat dépasse mes attentes.",
  },
  {
    name: "Yasmine Alaoui",
    rating: 5,
    text: "Collection d'art marocain authentique. Livraison rapide et emballage soigné.",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Ce Que Disent Nos Clients
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="elegant-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-6 italic">
                "{review.text}"
              </p>
              
              <p className="font-semibold text-foreground">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
