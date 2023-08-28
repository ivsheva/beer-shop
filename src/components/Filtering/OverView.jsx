import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OverView = ({ pathName }) => {
  const transformText = (text) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Box display="flex" fontSize="14px" color="darkgrey" marginTop="20px">
      <Link to="/">Back to overview / </Link>
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
