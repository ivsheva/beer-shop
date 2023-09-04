import countryProducts from "./countryProducts";
import crowlerProducts from "./crowlerProducts";
import glassProducts from "./glassProducts";
import packProducts from "./packProducts";
import products from "./products";
import saleProducts from "./saleProducts";
import styleProducts from "./styleProducts";
import voucherProducts from "./voucherProducts";

const allProducts = [
  ...products,
  ...styleProducts,
  ...countryProducts,
  ...packProducts,
  ...glassProducts,
  ...crowlerProducts,
  ...voucherProducts,
  ...saleProducts,
];

export default allProducts;
