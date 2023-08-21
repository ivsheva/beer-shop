import { Box, Image, Text } from "@chakra-ui/react";

const BeerCard = ({ img, brand, name }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Image src={img} width="250px" height="400px" />
      <Text color="darkgrey">{brand}</Text>
      <Text color="lightblack" maxWidth="240px">
        {name}
      </Text>
    </Box>
  );
};

export default BeerCard;
