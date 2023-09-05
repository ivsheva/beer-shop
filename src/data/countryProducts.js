import country1 from "../img/img/country1.jpg";
import country2 from "../img/img/country2.jpg";
import country3 from "../img/img/country3.jpg";
import country4 from "../img/img/country4.jpg";

let lastId = 0;
const prefix = "country_";

const countryProducts = [
  {
    id: prefix + ++lastId,
    brand: "450 North",
    name: "450 North - SLUSHY XL Banana Bluntz",
    price: 10.99,
    description:
      "Banana Bluntz XL is conditioned on double banana, orange, passionfruit and banana candies.",
    rating: 4.7,
    img: country1,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "450 North",
    name: "450 North - SLUSHY XL Space Intruders",
    price: 9.99,
    description:
      "Space Intruders XL is conditioned on double mango, apricot, tangerine, kiwi and coconut.",
    rating: 4.8,
    img: country2,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "Ārpus",
    name: "Ārpus / Hop Hooligans - QDH Nelson X Riwaka X Citra Lupomax X Simcoe Cryo TIPA",
    price: 6.49,
    description:
      "Banana Bluntz XL is conditioned on double banana, orange, passionfruit and banana candies.",
    rating: 4.8,
    img: country3,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "450 North",
    name: "450 North - SLUSHY XXL Fishbowl Punch",
    price: 10.99,
    description:
      "Smoothie Sour conditioned on pineapple, lemon, orange, Blue Curacao, sweet and sour mix, coconut cream, nerds candy and Swedish fish.",
    rating: 4.8,
    img: country4,
    quantity: 1,
  },
];

export default countryProducts;
