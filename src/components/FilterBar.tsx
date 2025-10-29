import { motion, AnimatePresence } from "framer-motion";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="glass-effect rounded-3xl p-6 mb-12 sticky top-24 z-30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Filtres</h3>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Réinitialiser
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary"
          >
            {isExpanded ? "Réduire" : "Étendre"}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Color Filters */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">Couleur</h4>
              <div className="flex flex-wrap gap-2">
                {COLORS.map((color) => (
                  <motion.button
                    key={color.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleColor(color.id)}
                    className={`group relative rounded-2xl p-3 transition-all duration-300 ${
                      filters.colors.includes(color.id)
                        ? "ring-2 ring-primary shadow-lg"
                        : "hover:shadow-md"
                    }`}
                    style={{
                      background: filters.colors.includes(color.id)
                        ? `linear-gradient(135deg, ${color.hex}15, ${color.hex}25)`
                        : "hsl(var(--muted))",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                        style={{ background: color.hex }}
                      />
                      <span className="text-sm font-medium">{color.name}</span>
                      {filters.colors.includes(color.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                        >
                          <X className="w-3 h-3 text-primary-foreground" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Format Filters */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">Format</h4>
              <div className="grid grid-cols-3 gap-3">
                {FORMATS.map((format) => (
                  <motion.button
                    key={format.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFormat(format.id)}
                    className={`relative rounded-2xl p-6 transition-all duration-300 ${
                      filters.formats.includes(format.id)
                        ? "bg-primary text-primary-foreground shadow-elegant"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">{format.icon}</div>
                      <div className="text-sm font-medium">{format.name}</div>
                      {filters.formats.includes(format.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-background flex items-center justify-center"
                        >
                          <X className="w-4 h-4 text-primary" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Preview (when collapsed) */}
      {!isExpanded && activeFiltersCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mt-4"
        >
          {filters.colors.map((colorId) => {
            const color = COLORS.find(c => c.id === colorId);
            return color ? (
              <Badge key={colorId} variant="secondary" className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: color.hex }}
                />
                {color.name}
              </Badge>
            ) : null;
          })}
          {filters.formats.map((formatId) => {
            const format = FORMATS.find(f => f.id === formatId);
            return format ? (
              <Badge key={formatId} variant="secondary">
                {format.icon} {format.name}
              </Badge>
            ) : null;
          })}
        </motion.div>
      )}
    </div>
  );
};
