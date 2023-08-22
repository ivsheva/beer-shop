import image1 from "../img/img/product-banner-1.jpg";
import image2 from "../img/img/product-banner-2.jpg";
import image3 from "../img/img/product-banner-3.jpg";

let lastId = 0;

const productCards = [
  {
    id: ++lastId,
    img: image1,
    genre: "Exclusive",
    title: "Crowlers",
  },
  {
    id: ++lastId,
    img: image2,
    genre: "Enjoy in style",
    title: "Proper glassware",
  },
  {
    id: ++lastId,
    img: image3,
    genre: "Mixed boxes",
    title: "Beer packs",
  },
];
export default productCards;
