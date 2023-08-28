import { Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const OverView = ({ pathName }) => {
  const transformText = (text) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Box display="flex" fontSize="14px" color="darkgrey" marginTop="20px">
      <Text>Back to overview / </Text>
      <Text color="lightblack" marginLeft="2px">
        {transformText(pathName)}
      </Text>
    </Box>
  );
};

OverView.propTypes = {
  pathName: PropTypes.string.isRequired,
};

export default OverView;
