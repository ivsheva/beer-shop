import crowler1 from "../img/img/crowler1.jpg";
import crowler2 from "../img/img/crowler2.jpg";

let lastId = 0;
const prefix = "crowler_";

const crowlerProducts = [
  {
    id: prefix + ++lastId,
    brand: "Brehon Brewhouse",
    name: "Brehon Brewhouse - Raglan Road",
    price: 4.99,
    description:
      "Complimenting notes of Madeira with the sweetness of roasted malts, this robust Whiskey Cask barrel-aged Imperial Stout is rich with notes of chocolate and liquorice. Hopped with Willamette and Magnum. CROWLER! CANNED 10-8, BEST BEFORE 21-9",
    rating: 4.8,
    img: crowler1,
  },
  {
    id: prefix + ++lastId,
    brand: "Lobik",
    name: "Lobik - Ripe Tropicana",
    price: 5.79,
    description:
      "Fruited Sour ale with pineapple, papaya, passionfruit and mango. CROWLER! CANNED 10-8, BEST BEFORE 21-9",
    rating: 4.8,
    img: crowler2,
  },
];

export default crowlerProducts;
