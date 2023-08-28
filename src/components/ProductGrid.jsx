import { Box, Select, Show, SimpleGrid, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import BeerCard from "./BeerCard";
import OverView from "./Filtering/OverView";

const ProductGrid = ({ title, list }) => {
  const pathname = useLocation().pathname;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      marginTop="50px"
      marginLeft={{ base: "none", lg: "120px", xl: "120px" }}
    >
      <Box alignSelf="flex-start">
        <Show below="lg">
          <OverView pathName={pathname} />
        </Show>
        <Text
          fontFamily="Questrial, sans-serif "
          fontSize="28px"
          lineHeight="140%"
          fontWeight="600"
          marginTop="10px"
        >
          {title}
        </Text>
      </Box>
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
          >{`${list.length} Products`}</Text>
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
        </Box>
        <Select
          width="180px"
          borderColor="lightgrey"
          _focus={{ boxShadow: "none", borderColor: "lightgrey" }}
        >
          <option value="default">Sort by</option>
          <option value="default">Default</option>
          <option value="abc">Name Ascending</option>
          <option value="lower">Lower price</option>
          <option value="higher">Higher price</option>
        </Select>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, xl: 3, "2xl": 4 }}
        marginTop="50px"
        gap="50px"
      >
        {list.map((beerItem) => (
          <BeerCard
            key={beerItem.id}
            img={beerItem.img}
            brand={beerItem.brand}
            name={beerItem.name}
            price={beerItem.price}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

ProductGrid.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default ProductGrid;
