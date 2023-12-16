import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisclosureContext } from "../../contexts/DisclosureContext";
import { ADD_TO_CART } from "../../store/cartSlice";
import DrawerCard from "./DrawerCard";

const WishDrawer = () => {
  const { wishDisclosure } = useContext(DisclosureContext);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const toast = useToast();
  const sum = wishlist
    .reduce((total, item) => total + item.price, 0)
    .toFixed(1);

  const handleAddToCart = () => {
    wishlist.forEach((product) => {
      const isInCart = cart.some((item) => item.name === product.name);
      if (!isInCart) {
        dispatch(ADD_TO_CART(product));
        toast({
          title: "Items Added!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <Drawer
      isOpen={wishDisclosure.isOpen}
      onClose={wishDisclosure.onClose}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Wish List</DrawerHeader>

        <DrawerBody>
          {wishlist.map((product) => (
            <DrawerCard
              key={product.id}
              id={product.id}
              img={product.imageUrl}
              brand={product.brand}
              name={product.name}
              price={product.price}
              isWishItem={true}
            />
          ))}
        </DrawerBody>
        <DrawerFooter display="flex" flexDirection="column">
          <Text>Total: €{sum}</Text>
          <Button
            colorScheme="blue"
            width="95%"
            mt="20px"
            mb="50px"
            fontWeight="600"
            paddingY="30px"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default WishDrawer;
