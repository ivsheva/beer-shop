import pack1 from "../img/img/pack1.jpg";
import pack2 from "../img/img/pack2.jpg";
import pack3 from "../img/img/pack3.jpg";
import pack4 from "../img/img/pack4.jpg";

let lastId = 0;

const packProducts = [
  {
    id: ++lastId,
    brand: "Beerdome",
    name: "Beerdome Bundle",
    price: 29.99,
    description:
      "Package of 6 beers: 1x Vault City - Triple Fruited Mango, 1x Frontaal - Enjoy the Distance, 1x Folkingebrew - Enter the Night, 1x Spartacus - Death Strain, 1x Spartacus - Under the Stars, 1x Poppels - Hazy India Pale Ale",
    rating: 4.8,
    img: pack1,
  },
  {
    id: ++lastId,
    brand: "Brouwerij Kees",
    name: "Kees Bundle",
    price: 24.99,
    description:
      "Package of 6 delicious Kees beers: 1x Bohemian Dream, 1x Barrel Project India Pale Ale 2023, 1x Undisclosed Desires, 1x Orange Trempée (collab with Dochter vd Korenaar), 1x California Sunset 2023, 1x Triple Haze",
    rating: 4.8,
    img: pack2,
  },
  {
    id: ++lastId,
    brand: "IPA",
    name: "IPA Bundle",
    price: 33.99,
    description:
      "Bunde with 6 different IPA's: 1x Folkingebrew - Follow the Sun, 1x Spartacus - Death Strain, 1x Kees - Baby Haze, 1x Mad Scientist / Folkingebrew - Quantum Flavourdynamics, 1x Frontaal - For the Love of Hops ´´Red´´, 1x Spartacus - Under the Stars",
    rating: 4.8,
    img: pack3,
  },
  {
    id: ++lastId,
    brand: "Dutch",
    name: "Dutch Bundle",
    price: 33.99,
    description: "This package consists of 6 delicious Dutch beers.",
    rating: 4.8,
    img: pack4,
  },
];

export default packProducts;
