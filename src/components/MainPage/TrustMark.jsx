import { Flex, HStack, Image, Show, Text } from "@chakra-ui/react";
import TrustMarkImg from "../../img/img/TrustMark-black.png";
import Mark from "../Other/Mark";

const TrustMark = () => {
  return (
    <Flex justifyContent="center" marginTop="24px">
      <HStack display="flex" flexWrap="wrap">
        <Text fontWeight="400" fontSize="24px">
          Excellent
        </Text>
        <Mark />
        <Show above="sm">
          <Image src={TrustMarkImg} width="140px" marginTop="-4px" />
        </Show>
      </HStack>
    </Flex>
  );
};

export default TrustMark;
