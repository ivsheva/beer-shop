import { Flex, Link, Text } from "@chakra-ui/react";
import darkerBg from "../../helpers/darkerBg";
import bannerBg from "../../img/img/bg-banner-1.jpg";

const SubscriptionPoster = () => {
  return (
    <Flex
      justify="center"
      align="center"
      width="100%"
      height="350px"
      bgImage={bannerBg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      color="white"
      _before={darkerBg}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        zIndex="9"
        lineHeight="140%"
        fontFamily="Questrial, sans-serif"
        textAlign="center"
      >
        <Text marginX={{ base: "20px", sm: "unset" }}>
          BE SURE TO BE THE FIRST TO DISCOVER OUR NEW FLAVOURS!
        </Text>
        <Text fontWeight="600" fontSize="28px" marginTop="16px">
          Follow us on Untappd
        </Text>
        <Link
          textDecoration="underline"
          fontFamily="Work Sans, sans-serif"
          marginTop="12px"
          href="https://untappd.com/v/beerdome/6159188"
          target="_blank"
        >
          And earn our own badge!
        </Link>
      </Flex>
    </Flex>
  );
};

export default SubscriptionPoster;
