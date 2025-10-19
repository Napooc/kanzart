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

export const navItems: NavItem[] = [
  { name: "Nouveauté", link: "/nouveaute" },
  {
    name: "Thème",
    dropdownItems: [
      { name: "Mon Maroc", link: "/theme/maroc" },
      { name: "Art Islamique et calligraphie", link: "/theme/islamic" },
      { name: "Nature et paysage", link: "/theme/nature" },
      { name: "Antique et vintage", link: "/theme/vintage" },
      { name: "Black and white", link: "/theme/bw" },
      { name: "Art floral", link: "/theme/floral" },
      { name: "Tableaux texturés", link: "/theme/texture" },
      { name: "Autour du Monde", link: "/theme/world" },
    ],
  },
  {
    name: "Couleur",
    colorItems: [
      { name: "Rouge", link: "/couleur/rouge", color: "#DC2626" },
      { name: "Bleu", link: "/couleur/bleu", color: "#2563EB" },
      { name: "Vert", link: "/couleur/vert", color: "#16A34A" },
      { name: "Jaune", link: "/couleur/jaune", color: "#EAB308" },
      { name: "Orange", link: "/couleur/orange", color: "#EA580C" },
      { name: "Rose", link: "/couleur/rose", color: "#EC4899" },
      { name: "Violet", link: "/couleur/violet", color: "#9333EA" },
      { name: "Noir", link: "/couleur/noir", color: "#171717" },
    ],
  },
  { name: "Format", link: "/format" },
  {
    name: "Intérieur",
    dropdownItems: [
      { name: "Maison", link: "/interieur/maison" },
      { name: "Bureau", link: "/interieur/bureau" },
      { name: "Restaurant & Hôtels", link: "/interieur/restaurant-hotels" },
      { name: "Personnalisé", link: "/interieur/personnalise" },
    ],
  },
  { name: "À propos", link: "/about" },
  { name: "Contact", link: "/contact" },
];
