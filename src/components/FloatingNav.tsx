import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";
import logo from "@/assets/kenzart-logo.png";

interface ColorItem {
  name: string;
  link: string;
  color: string;
}

interface NavItem {
  name: string;
  link?: string;
  dropdownItems?: { name: string; link: string }[];
  colorItems?: ColorItem[];
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() || 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed top-0 inset-x-0 mx-auto z-50 px-4 pt-4",
          className
        )}
      >
        <div className="max-w-7xl mx-auto glass-effect rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
          <Link to="/" className="flex items-center flex-shrink-0 pr-8">
            <img src={logo} alt="KANZART" className="h-20 w-auto px-4" />
          </Link>

          <div className="flex items-center space-x-2 flex-1 justify-center">
            {navItems.map((navItem, idx) => (
              <div
                key={`nav-${idx}`}
                className="relative"
                onMouseEnter={() => setHoveredItem(navItem.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {navItem.link ? (
                  <Link
                    to={navItem.link}
                    className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
                  >
                    {navItem.name}
                  </Link>
                ) : (
                  <>
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-all duration-300 flex items-center gap-1">
                      {navItem.name}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    
                    <AnimatePresence>
                      {hoveredItem === navItem.name && navItem.dropdownItems && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-3 glass-effect rounded-2xl shadow-2xl overflow-hidden z-50"
                        >
                          {/* Modern 2-column grid layout for Thème menu */}
                          {navItem.name === "Thème" ? (
                            <div className="grid grid-cols-2 gap-1 p-3 min-w-[500px]">
                              {navItem.dropdownItems.map((item, index) => (
                                <Link
                                  key={index}
                                  to={item.link}
                                  className="px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/70 rounded-lg transition-all duration-200 font-medium"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            /* Regular vertical dropdown for other menus */
                            <div className="min-w-[220px]">
                              {navItem.dropdownItems.map((item, index) => (
                                <Link
                                  key={index}
                                  to={item.link}
                                  className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                      {hoveredItem === navItem.name && navItem.colorItems && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 min-w-[240px] glass-effect rounded-2xl shadow-2xl p-4"
                        >
                          <div className="grid grid-cols-4 gap-3">
                            {navItem.colorItems.map((item, index) => (
                              <Link
                                key={index}
                                to={item.link}
                                className="group flex flex-col items-center gap-2"
                              >
                                <div 
                                  className="w-12 h-12 rounded-full border-2 border-border shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
                                  style={{ backgroundColor: item.color }}
                                />
                                <span className="text-xs text-foreground/70 group-hover:text-foreground transition-colors">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Cart Button */}
          <div className="flex-shrink-0 pl-4">
            <CartDrawer />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
