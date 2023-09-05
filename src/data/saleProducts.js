import sale1 from "../img/img/sale1.jpg";
import sale2 from "../img/img/sale2.jpg";
import sale3 from "../img/img/sale3.jpg";
import sale4 from "../img/img/sale4.jpg";

let lastId = 0;
const prefix = "sale_";

const saleProducts = [
  {
    id: prefix + ++lastId,
    brand: "Central Waters",
    name: "Central Waters - Maple Barrel Stout (2022)",
    oldPrice: 39.99,
    price: 29.99,
    description:
      "Imperial Stout aged in bourbon barrels, which previously contained B&E's Trees bourbon barrel aged maple syrup, providing the earthy nuttiness of the Wisconsin Maple Trees to an already outstanding barrel aged stout.",
    rating: 4.7,
    img: sale1,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "Folkingebrew",
    name: "Folkingebrew - Darkest Hour",
    oldPrice: 6.49,
    price: 5.79,
    description: "Imperial Stout with cocoa nibs & vanilla",
    rating: 4.8,
    img: sale2,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "J. Kemker",
    name: "J. Kemker - Appelwien",
    oldPrice: 13.29,
    price: 9.99,
    description:
      "Spontaneous fermented cider with apples from the Münsterland and Bielefeld region. Aged for 6 months in oak barrels. BBE: 15-10-2023",
    rating: 4.8,
    img: sale3,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "Lervig",
    name: "Lervig - No Worries - Driving Home For Christmas",
    oldPrice: 1.99,
    price: 0.99,
    description:
      "Drive home safe for Christmas with this Non-Alcoholic beer! It offers you all the malty, dark roasted and spice notes of other Christmas beers – but with none of the alcohol!",
    rating: 4.8,
    img: sale4,
    quantity: 1,
  },
];

export default saleProducts;
