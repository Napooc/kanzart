import { motion, useScroll, useTransform } from "framer-motion";
import { X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export type FilterState = {
  colors: string[];
  formats: string[];
};

const COLORS = [
  { id: "rouge", name: "Rouge", hex: "#DC2626" },
  { id: "bleu", name: "Bleu", hex: "#2563EB" },
  { id: "vert", name: "Vert", hex: "#16A34A" },
  { id: "jaune", name: "Jaune", hex: "#EAB308" },
  { id: "orange", name: "Orange", hex: "#EA580C" },
  { id: "rose", name: "Rose", hex: "#EC4899" },
  { id: "violet", name: "Violet", hex: "#9333EA" },
  { id: "noir", name: "Noir", hex: "#171717" },
];

const FORMATS = [
  { id: "carre", name: "Carré", icon: "□" },
  { id: "horizontal", name: "Horizontal", icon: "▭" },
  { id: "vertical", name: "Vertical", icon: "▯" },
];

interface FilterBarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export const FilterBar = ({ filters, onFiltersChange }: FilterBarProps) => {
  const [isCompact, setIsCompact] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleColor = (colorId: string) => {
    const newColors = filters.colors.includes(colorId)
      ? filters.colors.filter(c => c !== colorId)
      : [...filters.colors, colorId];
    onFiltersChange({ ...filters, colors: newColors });
  };

  const toggleFormat = (formatId: string) => {
    const newFormats = filters.formats.includes(formatId)
      ? filters.formats.filter(f => f !== formatId)
      : [...filters.formats, formatId];
    onFiltersChange({ ...filters, formats: newFormats });
  };

  const clearFilters = () => {
    onFiltersChange({ colors: [], formats: [] });
  };

  const activeFiltersCount = filters.colors.length + filters.formats.length;

  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        width: isCompact && !isExpanded ? "80px" : "320px"
      }}
      transition={{ duration: 0.3 }}
      className="h-fit sticky top-24 glass-effect rounded-3xl overflow-hidden shadow-elegant"
    >
      {/* Compact Toggle Button */}
      {isCompact && !isExpanded && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsExpanded(true)}
          className="w-full p-6 flex flex-col items-center gap-3 hover:bg-muted/50 transition-colors"
        >
          <Filter className="w-6 h-6 text-primary" />
          {activeFiltersCount > 0 && (
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
              {activeFiltersCount}
            </div>
          )}
        </motion.button>
      )}

      {/* Full Filter Content */}
      {(!isCompact || isExpanded) && (
        <div className="p-8 flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gradient">Filtres</h2>
            {isCompact && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground -ml-2 -mt-4"
            >
              Réinitialiser tout ({activeFiltersCount})
            </Button>
          )}

          {/* Color Filters */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Couleur</h3>
            <div className="grid grid-cols-2 gap-3">
              {COLORS.map((color) => {
            const isSelected = filters.colors.includes(color.id);
            return (
              <motion.button
                key={color.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleColor(color.id)}
                className={`relative rounded-2xl p-4 transition-all duration-300 ${
                  isSelected
                    ? "ring-2 ring-primary shadow-elegant"
                    : "hover:shadow-md"
                }`}
                style={{
                  background: isSelected
                    ? `linear-gradient(135deg, ${color.hex}20, ${color.hex}10)`
                    : "hsl(var(--muted))",
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-background shadow-md transition-transform"
                    style={{ 
                      background: color.hex,
                      transform: isSelected ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <span className="text-xs font-medium">{color.name}</span>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg"
                    >
                      <X className="w-3 h-3 text-primary-foreground" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
                );
              })}
            </div>
          </div>

          {/* Format Filters */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Format</h3>
            <div className="space-y-3">
              {FORMATS.map((format) => {
            const isSelected = filters.formats.includes(format.id);
            return (
              <motion.button
                key={format.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleFormat(format.id)}
                className={`w-full relative rounded-2xl p-5 transition-all duration-300 ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{format.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold">{format.name}</div>
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-6 h-6 rounded-full bg-background flex items-center justify-center"
                    >
                      <X className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
      )}
    </motion.div>
  );
};
