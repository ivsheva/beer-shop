import style1 from "../img/img/style1.jpg";
import style2 from "../img/img/style2.jpg";
import style3 from "../img/img/style3.jpg";
import style4 from "../img/img/style4.jpg";

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
  {
    id: ++lastId,
    brand: "Toppling Goliath",
    name: "Toppling Goliath - Double Dry Hop King Sue",
    price: 10.99,
    description:
      "Citra hops give King Sue its bold flavors of mango, orange and pineapple. This double dry hopped version packs even more flavor into each can.",
    rating: 4.8,
    img: style3,
  },
  {
    id: ++lastId,
    brand: "Fremont",
    name: "Fremont - Brew 6000 (2022)",
    price: 36.99,
    description:
      "This English-style barleywine ale uses floor-malted English barley, Noble hops and is aged in 10-15 year-old, single use bourbon barrels for 16 months to bring you a complex and subtle craft beer flavor experience. Brewed to celebrate the 6000th brew!",
    rating: 4.8,
    img: style4,
  },
];

export default styleProducts;
