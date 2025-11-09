import { motion } from "framer-motion";
import { X, Filter, Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

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
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-80 h-fit sticky top-24 glass-effect rounded-3xl overflow-visible shadow-elegant"
    >
      <div className="p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gradient">Filtres</h2>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Réinitialiser ({activeFiltersCount})
            </Button>
          )}
        </div>

        {/* Modern Color Picker Button */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Couleur</h3>
          
          <Popover open={colorPickerOpen} onOpenChange={setColorPickerOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full h-14 rounded-2xl border-2 hover:border-primary transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-sm">
                      {filters.colors.length > 0 
                        ? `${filters.colors.length} couleur${filters.colors.length > 1 ? 's' : ''}`
                        : 'Toutes les couleurs'}
                    </div>
                  </div>
                  {filters.colors.length > 0 && (
                    <div className="flex -space-x-2">
                      {filters.colors.slice(0, 3).map(colorId => {
                        const color = COLORS.find(c => c.id === colorId);
                        return color ? (
                          <div
                            key={colorId}
                            className="w-6 h-6 rounded-full border-2 border-background shadow-sm"
                            style={{ background: color.hex }}
                          />
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </Button>
            </PopoverTrigger>
            
            <PopoverContent 
              className="w-72 p-4 glass-effect border-2 shadow-2xl"
              side="right"
              align="start"
            >
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Choisir les couleurs</h4>
                <div className="grid grid-cols-4 gap-2">
                  {COLORS.map((color) => {
                    const isSelected = filters.colors.includes(color.id);
                    return (
                      <motion.button
                        key={color.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleColor(color.id)}
                        className="relative group"
                      >
                        <div
                          className={`w-14 h-14 rounded-xl shadow-lg transition-all duration-300 ${
                            isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
                          }`}
                          style={{ background: color.hex }}
                        />
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary" />
                            </div>
                          </motion.div>
                        )}
                        <div className="text-[10px] font-medium mt-1 text-center">
                          {color.name}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Format Filters */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Format</h3>
          <div className="space-y-2">
            {FORMATS.map((format) => {
              const isSelected = filters.formats.includes(format.id);
              return (
                <motion.button
                  key={format.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleFormat(format.id)}
                  className={`w-full relative rounded-xl p-4 transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{format.icon}</div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm">{format.name}</div>
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="w-5 h-5 rounded-full bg-background flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-primary" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
