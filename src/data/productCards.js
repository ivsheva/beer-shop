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
    link: "crowlers",
  },
  {
    id: ++lastId,
    img: image2,
    genre: "Enjoy in style",
    title: "Proper glassware",
    link: "glasses",
  },
  {
    id: ++lastId,
    img: image3,
    genre: "Mixed boxes",
    title: "Beer packs",
    link: "beer-packs",
  },
];
export default productCards;
