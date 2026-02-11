const colors = {
  // Couleurs principales
  dark: "#1A0046",
  mauve: "#7F00FE", 
  blue: "#00BFFE",
  pink: "#FE0060",
  
  // Variations et dérivés
  darkLight: "#2D0066",
  darkLighter: "#400080",
  
  mauveLight: "#9933FF",
  mauveLighter: "#B366FF",
  
  blueLight: "#33CCFF", 
  blueLighter: "#66DDFF",
  
  pinkLight: "#FF3380",
  pinkLighter: "#FF6699",
  
  // Couleurs neutres
  white: "#FFFFFF",
  gray: "#F3F4F6",
  grayDark: "#374151",
  black: "#000000",
  
  // Gradients prédéfinis
  gradients: {
    primary: `linear-gradient(135deg, ${colors.mauve} 0%, ${colors.blue} 100%)`,
    secondary: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.mauve} 100%)`,
    accent: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.mauve} 100%)`,
    hero: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.mauve} 50%, ${colors.blue} 100%)`
  },
  
  // Classes Tailwind personnalisées (à ajouter à tailwind.config.js)
  tailwind: {
    'custom-dark': '#1A0046',
    'custom-mauve': '#7F00FE',
    'custom-blue': '#00BFFE', 
    'custom-pink': '#FE0060',
    'custom-dark-light': '#2D0066',
    'custom-mauve-light': '#9933FF',
    'custom-blue-light': '#33CCFF',
    'custom-pink-light': '#FF3380'
  }
};

export default colors;
