export type location = {
  logo: string;
  country: string;
  street: string;
  county: string;
  postalCode: string;
  phoneNumber: string;
};

export const locations: location[] = [
  {
    logo: "/assets/about/desktop/illustration-uk.svg",
    country: "United Kingdom",
    street: "68 Asfordby Rd",
    county: "  Alcaston",
    postalCode: "SY6 1YA",
    phoneNumber: "+44 1241 918425",
  },
  {
    logo: "/assets/about/desktop/illustration-canada.svg",
    country: "Canada",
    street: "1528 Eglinton Avenue",
    county: "Toronto",
    postalCode: " Ontario M4P 1A6",
    phoneNumber: "+1 416 485 2997",
  },
  {
    logo: "/assets/about/desktop/illustration-australia.svg",
    country: "Australia",
    street: "36 Swanston Street",
    county: "Kewell",
    postalCode: " Victoria",
    phoneNumber: "+61 4 9928 3629",
  },
];
