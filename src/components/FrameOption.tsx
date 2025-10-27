interface FrameOptionProps {
  id: string;
  name: string;
  price: number;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export const FrameOption = ({ id, name, price, description, isSelected, onClick }: FrameOptionProps) => {
  const getFrameStyle = () => {
    switch (id) {
      case "modern":
        return "border-4 border-gray-400 shadow-lg";
      case "classic":
        return "border-8 border-amber-700 shadow-xl";
      case "floating":
        return "border-2 border-black shadow-md";
      case "none":
        return "border border-dashed border-gray-300";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
        isSelected
          ? "ring-4 ring-accent scale-105 shadow-xl"
          : "hover:scale-105 hover:shadow-lg bg-card"
      }`}
    >
      {/* Frame Preview */}
      <div className="aspect-[3/4] p-4 bg-secondary/20 flex items-center justify-center">
        <div 
          className={`w-full h-full bg-gradient-to-br from-white to-gray-50 ${getFrameStyle()} transition-all duration-300 flex items-center justify-center`}
        >
          {isSelected && (
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-lg">
              ✓
            </div>
          )}
        </div>
      </div>
      
      {/* Frame Info */}
      <div className="p-3 text-left border-t bg-card/50">
        <p className="font-semibold text-sm mb-1">{name}</p>
        <p className="text-xs text-muted-foreground mb-2">{description}</p>
        <p className="text-accent font-bold text-sm">
          {price > 0 ? `+${price} MAD` : "Inclus"}
        </p>
      </div>
    </button>
  );
};

export const frames = [
  {
    id: "modern",
    name: "Moderne",
    price: 200,
    description: "Aluminium brossé",
    borderClass: "border-4 border-gray-400",
    padding: 16,
  },
  {
    id: "classic",
    name: "Classique",
    price: 350,
    description: "Bois sculpté doré",
    borderClass: "border-8 border-amber-700",
    padding: 24,
  },
  {
    id: "floating",
    name: "Flottant",
    price: 300,
    description: "Bordure fine noire",
    borderClass: "border-2 border-black",
    padding: 8,
  },
  {
    id: "none",
    name: "Sans Cadre",
    price: 0,
    description: "Toile montée",
    borderClass: "",
    padding: 0,
  },
];
