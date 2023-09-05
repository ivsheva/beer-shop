import glass1 from "../img/img/glass1.jpg";
import glass2 from "../img/img/glass2.jpg";
import glass3 from "../img/img/glass3.jpg";
import glass4 from "../img/img/glass4.jpg";

let lastId = 0;
const prefix = "glass_";

const glassProducts = [
  {
    id: prefix + ++lastId,
    brand: "Funky Fluid",
    name: "Funky Fluid - 4th Anniversary Shaker Glass Gold 50cl",
    price: 5.99,
    description: "Birthday collab glass.",
    rating: 4.8,
    img: glass1,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "Funky Fluid",
    name: "Funky Fluid - Shaker Glass White 50cl",
    price: 5.99,
    description: "Shaker with white Funky Fluid logos.",
    rating: 4.8,
    img: glass2,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "Brehon Brewhouse",
    name: "Brehon Brewhouse - Balloon Glass 50cl",
    price: 4.99,
    description: "",
    rating: 4.7,
    img: glass3,
    quantity: 1,
  },
  {
    id: prefix + ++lastId,
    brand: "PINTA",
    name: "PINTA - Barrel Brewing Glass 50cl",
    price: 5.99,
    description: "",
    rating: 4.8,
    img: glass4,
    quantity: 1,
  },
];

export default glassProducts;
