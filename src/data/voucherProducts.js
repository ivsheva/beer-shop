import voucher1 from "../img/img/voucher1.jpg";
import voucher2 from "../img/img/voucher2.jpg";
import voucher3 from "../img/img/voucher3.jpg";
import voucher4 from "../img/img/voucher4.jpg";

let lastId = 0;
const prefix = "voucher_";

const voucherProducts = [
  {
    id: prefix + ++lastId,
    brand: "Voucher",
    name: "Digital Voucher - 25 euro",
    price: 25.0,
    description:
      "25 euro voucher. You'll receive the code per mail after payment is confirmed. Please use the pick-up option to avoid the shipping costs if no other beers are being ordered.",
    rating: 4.8,
    img: voucher1,
  },
  {
    id: prefix + ++lastId,
    brand: "Voucher",
    name: "Digital Voucher - 50 euro",
    price: 50.0,
    description:
      "50 euro voucher. You'll receive the code per mail after payment is confirmed. Please use the pick-up option to avoid the shipping costs if no other beers are being ordered.",
    rating: 4.8,
    img: voucher2,
  },
  {
    id: prefix + ++lastId,
    brand: "Voucher",
    name: "Digital Voucher - 100 euro",
    price: 100.0,
    description:
      "100 euro voucher. You'll receive the code per mail after payment is confirmed. Please use the pick-up option to avoid the shipping costs if no other beers are being ordered.",
    rating: 4.8,
    img: voucher3,
  },
  {
    id: prefix + ++lastId,
    brand: "Voucher",
    name: "Digital Voucher - 125 euro",
    price: 125.0,
    description:
      "125 euro voucher. You'll receive the code per mail after payment is confirmed. Please use the pick-up option to avoid the shipping costs if no other beers are being ordered.",
    rating: 4.8,
    img: voucher4,
  },
];

export default voucherProducts;
