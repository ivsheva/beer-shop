import { Box, Button, Image, Input, Link, Show, Text } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import TrustMark from "../components/MainPage/TrustMark";
import Description from "../components/ProductPage/Description";
import DescriptionAccordion from "../components/ProductPage/DescriptionAccordion";
import ProductDetailPageSkeleton from "../components/Skeletons/ProductPage/ProductDetailPageSkeleton";
import useBeer from "../hooks/useBeer";
import useProductDetail from "../hooks/useProductDetails";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useBeer(id);

  if (isLoading) return <ProductDetailPageSkeleton />;

  return (
    <Box
      display="flex"
      width={{ base: "80%", lg: "90%", xl: "60%" }}
      margin="0 auto"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems={{ base: "center", lg: "unset" }}
    >
      <ProductImage imageUrl={product.imageUrl} />
      <ProductBody product={product} />
    </Box>
  );
};

const ProductImage = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      float={{ base: "unset", lg: "left" }}
      maxWidth={{ base: "300px", md: "600px", lg: "500px" }}
      maxHeight="800px"
    />
  );
};

const ProductBody = ({ product }) => {
  const {
    productAmount,
    setProductAmount,
    inWish,
    handleAddToCart,
    handleAddToWish,
  } = useProductDetail(product);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={{ base: "center", lg: "unset" }}
      marginTop="50px"
      marginLeft={{ base: "unset", lg: "60px", xl: "150px", "2xl": "200px" }}
      flexWrap="wrap"
    >
      <ProductInfo product={product} />
      <ProductControl
        productAmount={productAmount}
        setProductAmount={setProductAmount}
        inWish={inWish}
        handleAddToCart={handleAddToCart}
        handleAddToWish={handleAddToWish}
      />
      <TrustMark />
      <Show above="md">
        <Description description={product.description} />
      </Show>
      <Show below="md">
        <Box marginTop="20px" width="100%">
          <DescriptionAccordion
            title="Description"
            content={product.description}
          />
          <DescriptionAccordion title="Share" />
        </Box>
      </Show>
    </Box>
  );
};

const ProductInfo = ({ product }) => {
  return (
    <>
      <Link color="customGreen" textDecoration="underline">
        {product.brand}
      </Link>
      <Text
        fontSize={{ base: "24px", lg: "28px" }}
        textAlign={{ base: "center", lg: "unset" }}
        marginTop="8px"
      >
        {product.name}
      </Text>
      <Text color="red" marginTop="12px">
        €{product.price}
      </Text>
      <Text color="grey" fontWeight="600" marginY="24px">
        {product.quantity > 0 ? "In stock" : "Out of stock"}
      </Text>
    </>
  );
};

const ProductControl = ({
  productAmount,
  setProductAmount,
  inWish,
  handleAddToCart,
  handleAddToWish,
}) => {
  return (
    <Box display="flex">
      <Input
        value={productAmount}
        onChange={(event) => setProductAmount(event.target.value)}
        maxWidth="60px"
        height="50px"
        borderRadius="0"
        textAlign="center"
        borderColor="lightgrey"
        _focus={{ borderColor: "lightgrey", boxShadow: "none" }}
        type="number"
        max={99}
      />
      <Button
        colorScheme="red"
        bg="red"
        maxWidth="350px"
        width="100%"
        height="50px"
        borderRadius="none"
        margin="0 2px 0 12px"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </Button>
      <Button
        colorScheme="red"
        bg="red"
        blockSize="50px"
        borderRadius="0"
        onClick={handleAddToWish}
      >
        {inWish ? <AiFillHeart size={36} /> : <AiOutlineHeart size={36} />}
      </Button>
    </Box>
  );
};

export default ProductDetailPage;
