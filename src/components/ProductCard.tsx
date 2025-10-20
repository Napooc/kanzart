import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";
interface ProductCardProps {
  image: string;
  title: string;
  price?: string;
  link: string;
  className?: string;
}
export const ProductCard = ({
  image,
  title,
  price,
  link,
  className
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return <Link to={link}>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5
    }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`elegant-card group cursor-pointer ${className}`}>
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img src={image} alt={title} className="w-full h-full object-cover" animate={{
          scale: isHovered ? 1.1 : 1
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} />
          
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: isHovered ? 1 : 0
        }} className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          {price && <p className="text-lg font-medium text-gradient">
              {price}
            </p>}
        </div>
      </motion.div>
    </Link>;
};