import style1 from "../img/img/style1.jpg";
import style2 from "../img/img/style2.jpg";

let lastId = 0;

const styleProducts = [
  {
    id: ++lastId,
    brand: "Croma",
    name: "Croma - Tropo Rosso (Bourbon Barrel Aged)",
    price: 28.99,
    description:
      "Bourbon barrel aged Barleywine without any adjuncts, aged in a Four Roses barrel.",
    rating: "4.8",
    img: style1,
  },
  {
    id: ++lastId,
    brand: "Brehon Brewhouse",
    name: "Brehon Brewhouse - Raglan Road",
    price: 5.79,
    description:
      "Complimenting notes of Madeira with the sweetness of roasted malts, this robust Whiskey Cask barrel-aged Imperial Stout is rich with notes of chocolate and liquorice. Hopped with Willamette and Magnum. CROWLER! CANNED 10-8, BEST BEFORE 21-9",
    rating: 4.6,
    img: style2,
  },
];

export default styleProducts;
