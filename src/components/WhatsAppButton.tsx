import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "212600000000"; // Replace with actual WhatsApp number
  const message = "Bonjour! Je suis intéressé par vos tableaux.";
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center group hover:shadow-2xl transition-shadow"
      aria-label="Contacter sur WhatsApp"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 blur-xl"
      />
      
      <MessageCircle className="w-7 h-7 relative z-10" />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 px-4 py-2 bg-background/95 backdrop-blur-sm rounded-xl shadow-lg whitespace-nowrap text-sm font-medium pointer-events-none"
      >
        Contactez-nous sur WhatsApp
      </motion.div>
    </motion.button>
  );
};
