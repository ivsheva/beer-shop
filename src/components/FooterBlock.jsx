import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const FooterBlock = ({ title, email, list }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginTop="64px"
      lineHeight="140%"
    >
      <Text
        fontFamily="Questrial, sans-serif"
        fontSize="15px"
        fontWeight="700"
        marginBottom="24px"
      >
        {title}
      </Text>
      <Box display="flex" flexDirection="column" rowGap="4px">
        {list.map((listItem) => (
          <Text
            fontWeight={listItem.highlighted ? "600" : "400"}
            fontSize="15px"
            marginBottom={listItem.highlighted ? "8px" : ""}
            key={listItem.id}
          >
            {listItem.description}
          </Text>
        ))}
        {email && (
          <Box
            marginTop="20px"
            display="flex"
            flexDirection="column"
            rowGap="4px"
            fontSize="14px"
          >
            <Text>E-mail: {email}</Text>
            <Text>KVK-nummer: 68251262</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

FooterBlock.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default FooterBlock;
