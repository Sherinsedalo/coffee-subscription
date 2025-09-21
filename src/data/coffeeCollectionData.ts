export type coffeeItem = {
  img: string;
  title: string;
  description: string;
};

export const coffeeItems: coffeeItem[] = [
  {
    img: "/assets/home/desktop/image-gran-espresso.png",
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },

  {
    img: "/assets/home/desktop/image-planalto.png",
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },

  {
    img: "/assets/home/desktop/image-piccollo.png",
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    img: "/assets/home/desktop/image-danche.png",
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];
