const footerItems = [
  {
    id: 1,
    title: "Customer Service",
    email: "",
    list: [
      {
        id: 1,
        description: "About us",
        link: "/service/about-us",
        highlighted: false,
      },
      {
        id: 2,
        description: "FAQ",
        link: "/service/faq",
        highlighted: false,
      },
      {
        id: 3,
        description: "How can I pay for my order?",
        link: "/service/how-can-i-pay-for-my-order",
        highlighted: false,
      },
      {
        id: 4,
        description: "Terms and conditions",
        link: "/service/terms-and-conditions",
        highlighted: false,
      },
      {
        id: 5,
        description: "Privacy Policy",
        link: "/service/privacy-policy/",
        highlighted: false,
      },
    ],
  },
  {
    id: 2,
    title: "My account",
    email: "",
    list: [
      {
        id: 1,
        description: "Register",
        highlighted: false,
        clickable: "login",
      },
      {
        id: 2,
        description: "My orders",
        highlighted: false,
        clickable: "cart",
      },
      {
        id: 3,
        description: "My wishlist",
        highlighted: false,
        clickable: "wishlist",
      },
    ],
  },
  {
    id: 3,
    title: "Categories",
    email: "",
    list: [
      {
        id: 1,
        description: "All Beers",
        link: "/all-beers",
        highlighted: false,
      },
      {
        id: 2,
        description: "Style",
        link: "/style",
        highlighted: false,
      },
      {
        id: 3,
        description: "Countries",
        link: "/countries",
        highlighted: false,
      },
      {
        id: 4,
        description: "Beer packs",
        link: "/beer-packs",
        highlighted: false,
      },
      {
        id: 5,
        description: "Glasses",
        link: "/glasses",
        highlighted: false,
      },
      {
        id: 6,
        description: "Crowlers",
        link: "/crowlers",
        highlighted: false,
      },
      {
        id: 7,
        description: "Gift vouchers",
        link: "/gift-vouchers",
        highlighted: false,
      },
      {
        id: 8,
        description: "Sale",
        link: "/sale",
        highlighted: false,
      },
    ],
  },
  {
    id: 4,
    title: "About Us",
    email: "info@beerdome.nl",
    list: [
      {
        id: 1,
        description: "Beerdome",
        highlighted: true,
      },
      {
        id: 2,
        description: "Legolaan 12",
        highlighted: false,
      },
      {
        id: 3,
        description: "9861 AT Grootegast",
        highlighted: false,
      },
      {
        id: 4,
        description: "Nederland",
        highlighted: false,
      },
    ],
  },
];

export default footerItems;
