import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bannerBg from "../../img/img/bg-banner-1.jpg";
import darkerBg from "../../helpers/darkerBg";

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
      _before={darkerBg}
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
        <LoyaltyText />
        <LoyaltyButton />
      </VStack>
    </Box>
  );
};

const LoyaltyText = () => {
  return (
    <>
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
    </>
  );
};

const LoyaltyButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      bg="black"
      color="white"
      borderRadius="50px"
      padding="24px 48px"
      fontWeight="400"
      _hover={{
        bg: "black",
      }}
      animation="ease-in-out"
      onClick={() => navigate("/loyalty-program")}
      cursor="pointer"
    >
      LOYALTY
    </Button>
  );
};

export default LoyaltyProgram;
