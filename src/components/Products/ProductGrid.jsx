import {
  Box,
  Button,
  Select,
  Show,
  SimpleGrid,
  Text,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import useSortedProducts from "../../hooks/useSortedProducts";
import FilterDrawer from "./../Filtering/FilteringDrawer";
import OverView from "./../Filtering/OverView";
import BeerCard from "./BeerCard";
import VoucherDescription from "./VoucherDescription";

const ProductGrid = ({
  products,
  checkedBrands,
  filteredValues,
  title,
  brands,
  prices,
  isVoucher = false,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sortedProducts, sortBy, setSortBy } = useSortedProducts({
    products,
    filteredValues,
    checkedBrands,
  });

  const pathname = useLocation().pathname;

  return (
    <Flex
      direction="column"
      width="100%"
      marginTop="50px"
      marginLeft={{ base: "none", lg: "120px", xl: "120px" }}
    >
      <ProductTitle title={title} isVoucher={isVoucher} pathname={pathname} />
      <FilterButton onOpen={onOpen} />
      <FilterDrawer
        isOpen={isOpen}
        onClose={onClose}
        brands={brands}
        prices={prices}
      />
      <GridHeader
        sortedProducts={sortedProducts}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <GridBody sortedProducts={sortedProducts} />
    </Flex>
  );
};

const ProductTitle = ({ title, isVoucher, pathname }) => {
  return (
    <Box alignSelf="flex-start">
      <Show below="lg">
        <OverView pathName={pathname} />
      </Show>
      {isVoucher && <VoucherDescription />}
      {!isVoucher && (
        <Text
          fontFamily="Questrial, sans-serif "
          fontSize="28px"
          lineHeight="140%"
          fontWeight="600"
          marginTop="10px"
        >
          {title}
        </Text>
      )}
    </Box>
  );
};

const FilterButton = ({ onOpen }) => {
  return (
    <Button
      display={{ base: "flex", lg: "none" }}
      variant="outline"
      color="darkgreen"
      border="1px solid darkgreen"
      borderRadius="50px"
      _hover={{ bg: "darkgreen", color: "white" }}
      width="100%"
      marginY="24px"
      paddingY="24px"
      onClick={onOpen}
    >
      FILTER
    </Button>
  );
};

const GridHeader = ({ sortedProducts, sortBy, setSortBy }) => {
  return (
    <Box
      fontWeight="600"
      marginTop="14px"
      width="100%"
      display="flex"
      justifyContent="space-between"
    >
      <Box width="50%" display="flex" alignItems="center" columnGap="20px">
        <Text
          display={{ base: "none", md: "block" }}
        >{`${sortedProducts.length} Products`}</Text>
        <GridSelect />
      </Box>
      <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
    </Box>
  );
};

const GridSelect = () => {
  return (
    <Select
      width="72px"
      height="36px"
      borderColor="lightgrey"
      _focus={{ boxShadow: "none", borderColor: "lightgrey" }}
    >
      <option value="16">16</option>
      <option value="36">36</option>
      <option value="48">48</option>
      <option value="72">72</option>
    </Select>
  );
};

const SortSelect = ({ sortBy, setSortBy }) => {
  return (
    <Select
      width="180px"
      borderColor="lightgrey"
      _focus={{ boxShadow: "none", borderColor: "lightgrey" }}
      value={sortBy}
      onChange={(event) => setSortBy(event.target.value)}
    >
      <option value="default">Sort by</option>
      <option value="default">Default</option>
      <option value="abc">Name Ascending</option>
      <option value="lower">Lower price</option>
      <option value="higher">Higher price</option>
    </Select>
  );
};

const GridBody = ({ sortedProducts }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, xl: 3, "2xl": 4 }}
      marginTop="50px"
      gap="50px"
    >
      {sortedProducts.map((product) => (
        <BeerCard key={product.id} product={product} isFull={true} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
