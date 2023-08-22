import { Box, Button, Text, VStack } from "@chakra-ui/react";
import bannerBg from "../img/img/bg-banner-1.jpg";

const LoyaltyProgram = () => {
  return (
    <Box
      backgroundImage={bannerBg}
      width="100%"
      fit="cover"
      bgSize="cover"
      bgPosition="center"
      marginTop="112px"
      position="relative"
      height={{ base: "485px", lg: "550px" }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <VStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        color="white"
        position="relative"
        zIndex="1"
      >
        <Text
          fontFamily="Questrial, sans-serif"
          fontSize={{ base: "28px", md: "48px" }}
          textAlign="center"
          fontWeight="700"
          lineHeight="120%"
        >
          Are you a Beerdome Lover?
        </Text>
        <Text
          maxWidth={{ base: "100%", sm: "90%", lg: "50%", xl: "36%" }}
          textAlign="center"
          fontSize={{ base: "14px", md: "18px" }}
        >
          We want to reward our loyal customers! That’s why we introduce our
          loyalty program. Save loyalty points and get discounts or exclusive
          products!
        </Text>
        <Button
          bg="black"
          color="white"
          borderRadius="50px"
          padding="24px 48px"
          fontWeight="400"
        >
          LOYALTY
        </Button>
      </VStack>
    </Box>
  );
};

export default LoyaltyProgram;
