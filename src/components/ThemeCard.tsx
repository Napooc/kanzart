import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ThemeCardProps {
  image: string;
  title: string;
  link: string;
  delay?: number;
}

export const ThemeCard = ({ image, title, link, delay = 0 }: ThemeCardProps) => {
  return (
    <Link to={link}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -10 }}
        className="elegant-card group overflow-hidden"
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-2xl font-bold text-white"
            >
              {title}
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
