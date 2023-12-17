import { useDispatch, useSelector } from "react-redux";

function useGeneralProductData() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  return { dispatch, cart, wishlist };
}

export default useGeneralProductData;
