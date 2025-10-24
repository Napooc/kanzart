import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useState } from "react";
interface ProductCardProps {
  image: string;
  title: string;
  link: string;
  name?: string;
}
export const ProductCard = ({
  image,
  title,
  link,
  name
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <Link to={link}>
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.4
    }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="group relative overflow-hidden rounded-2xl cursor-pointer h-[280px] w-full">
        {/* Image with overlay */}
        <motion.div className="absolute inset-0" animate={{
        scale: isHovered ? 1.1 : 1
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }}>
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Product Name Badge - Top of Card */}
          {name && <motion.div initial={{
          y: -100,
          opacity: 0
        }} animate={{
          y: isHovered ? 0 : -100,
          opacity: isHovered ? 1 : 0
        }} transition={{
          duration: 0.4,
          ease: "easeOut"
        }} className="absolute top-4 left-4 right-4">
              <div className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary/95 to-accent/95 backdrop-blur-md border border-white/20 shadow-lg">
                <p className="text-sm font-bold text-white tracking-wide text-center truncate">
                  {name}
                </p>
              </div>
            </motion.div>}

          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: isHovered ? 0 : 20,
          opacity: isHovered ? 1 : 0
        }} transition={{
          duration: 0.3
        }} className="mb-2">
            
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
            {title}
          </h3>
          
          <motion.div initial={{
          width: 0
        }} animate={{
          width: isHovered ? "100%" : "40%"
        }} transition={{
          duration: 0.4
        }} className="h-0.5 bg-gradient-to-r from-accent to-primary" />
        </div>

        {/* Corner decoration */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: isHovered ? 1 : 0
      }} className="absolute top-4 right-4 w-12 h-12">
          <div className="w-full h-full border-t-2 border-r-2 border-accent/60 rounded-tr-xl" />
        </motion.div>
      </motion.div>
    </Link>;
};