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
  { name: "Panneau Acoustique", link: "/panneau-acoustique" },
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
