import { Flex, HStack, Image, Show, Text } from "@chakra-ui/react";
import TrustMarkImg from "../../img/img/TrustMark-black.png";
import Mark from "../Other/Mark";

const TrustMark = () => {
  return (
    <Flex justifyContent="center" marginTop="24px">
      <HStack display="flex" flexWrap="wrap" justifyContent="center">
        <Text fontWeight="400" fontSize="18px">
          Excellent
        </Text>
        <Mark />
        <Show above="sm">
          <Image
            display="flex"
            src={TrustMarkImg}
            width="80px"
            marginTop="-4px"
          />
        </Show>
      </HStack>
    </Flex>
  );
};

export default TrustMark;
