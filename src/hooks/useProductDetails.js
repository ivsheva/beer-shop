import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisclosureContext } from "../contexts/DisclosureContext";
import { ADD_TO_CART } from "../store/cartSlice";
import { ADD_TO_WISH, REMOVE_FROM_WISH } from "../store/wishlistSlice";

function useProductDetail(product = null) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const { cartDisclosure } = useContext(DisclosureContext);
  const { wishDisclosure } = useContext(DisclosureContext);

  const [productAmount, setProductAmount] = useState(1);

  let inWish = wishlist.some((item) => item.name === product.name);

  const handleAddToCart = () => {
    if (!cart.find((item) => item.name === product.name)) {
      productAmount > 0
        ? dispatch(ADD_TO_CART({ ...product, quantity: productAmount }))
        : dispatch(ADD_TO_CART(product));

      cartDisclosure.onOpen();
    }
  };

  const handleAddToWish = () => {
    if (!wishlist.find((item) => item.name === product.name)) {
      dispatch(ADD_TO_WISH(product));
      wishDisclosure.onOpen();
    } else {
      dispatch(REMOVE_FROM_WISH(product.id));
      inWish = false;
    }
  };

  return {
    productAmount,
    setProductAmount,
    inWish,
    handleAddToCart,
    handleAddToWish,
  };
}

export default useProductDetail;
