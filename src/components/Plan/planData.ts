export type coffeeFormItem = {
  title: string;
  description: string;
};

export type grindOptionsItem = {
  title: string;
  description: string;
};

export type coffeeKindItem = {
  title: string;
  description: string;
};
export type coffeeDosageItem = {
  title: string;
  description: string;
};

export type deliveryFrequencyItem = {
  title: string;
  description: string;
};

export const coffeeForm: coffeeFormItem[] = [
  {
    title: "Capsule",
    description: "Compatible with Nespresso systems and similar brewers   ",
  },
  {
    title: "Filter",
    description:
      "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    title: "Espresso",
    description:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
];

export const grindOptions: grindOptionsItem[] = [
  {
    title: "Wholebean",
    description: "Best choice if you cherish the full sensory experience",
  },
  {
    title: "Filter",
    description:
      " For drip or pour-over coffee methods such as V60 or Aeropress",
  },
  {
    title: "Cafetiére",
    description: "Course ground beans specially suited for french press coffee",
  },
];

export const coffeeKind: coffeeKindItem[] = [
  {
    title: "  Single origin",
    description:
      " Distinct, high quality coffee from a specific family-owned farm",
  },
  {
    title: "Decaf",
    description:
      "Just like regular coffee, except the caffeine has been removed",
  },
  {
    title: "Blended",
    description:
      "Combination of two or three dark roasted beans of organic coffees",
  },
];

export const coffeeDosage: coffeeDosageItem[] = [
  {
    title: "250g",
    description:
      " Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
  {
    title: "500g",
    description:
      "Perfect option for a couple. Yields about 40 delectable cups.",
  },
  {
    title: "1000g",
    description:
      " Perfect for offices and events. Yields about 90 delightful cups.",
  },
];

export const deliveryFrequency: deliveryFrequencyItem[] = [
  {
    title: "Every week",
    description: " $14.00 per shipment. Includes free first-class shipping.",
  },
  {
    title: "Every 2 weeks",
    description: "$17.25 per shipment. Includes free priority shipping.",
  },
  {
    title: "Every month",
    description: "$22.50 per shipment. Includes free priority shipping.",
  },
];
