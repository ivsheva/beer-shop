import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OverView = ({ pathName }) => {
  const transformText = (text) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Flex fontSize="14px" color="darkgrey" marginTop="20px">
      <Link to="/">Back to overview / </Link>
      <Text color="lightblack" marginLeft="2px">
        {transformText(pathName)}
      </Text>
    </Flex>
  );
};

export default OverView;
