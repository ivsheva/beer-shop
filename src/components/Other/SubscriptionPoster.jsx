import { Box, Link, Text } from "@chakra-ui/react";
import bannerBg from "../../img/img/bg-banner-1.jpg";

const SubscriptionPoster = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="350px"
      bgImage={bannerBg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      color="white"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: "0",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
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
      </Box>
    </Box>
  );
};

export default SubscriptionPoster;
