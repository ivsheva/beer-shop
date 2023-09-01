/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from "@chakra-ui/react";

const VoucherDescription = () => {
  return (
    <Box>
      <Text fontFamily="Questrial, sans-serif" fontSize="30px" fontWeight="700">
        Do you want to surprise someone? Give a Beerdome voucher!
      </Text>
      <Text color="darkgrey" marginTop="20px" maxWidth="830px" mb="30px">
        You'll receive the code per mail after payment is confirmed. Please use
        the pick-up option to avoid the shipping costs if no other beers are
        being ordered.
      </Text>
    </Box>
  );
};

export default VoucherDescription;
