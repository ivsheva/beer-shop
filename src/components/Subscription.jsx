import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setError("This field is required");
    } else {
      setError("");

      // logic
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="290px"
      width="100%"
      color="white"
      marginTop="40px"
      bgColor="red"
      lineHeight="140%"
    >
      <Text fontFamily="Questrial" fontSize="20px" fontWeight="400">
        Sign up for our newsletter
      </Text>
      <Text
        textAlign="center"
        fontSize="15px"
        fontWeight="500"
        lineHeight="200%"
        marginTop="8px"
      >
        Receive the latest offers and promotions
      </Text>
      <Box
        display={{ base: "none", lg: "flex" }}
        justifyContent="space-between"
        margin="0 auto"
        columnGap="36px"
        width={{ base: "50%", xl: "40%" }}
        alignItems="center"
        marginTop="50px"
      >
        <Input
          type="email"
          placeholder="E-mail address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          sx={{
            "::placeholder": { color: "white" },
            "&:hover": { background: "transparent", borderColor: "white" },
            "&:focus": {
              boxShadow: "none",
              borderBottomColor: "white", // Add bottom border on focus
            },
          }}
          paddingY="24px"
          border="0"
          borderBottom="1px solid"
          borderRadius="0"
          fontSize="15px"
          fontWeight="500"
          required
        />
        <Button
          fontSize="15px"
          lineHeight="120%"
          fontWeight="700"
          colorScheme="green"
          background="darkgreen"
          padding="24px 72px"
          borderRadius="none"
          onClick={handleSubscribe}
        >
          SUBSCRIBE
        </Button>
      </Box>
      <Box display={{ base: "flex", lg: "none" }} width="90%" marginTop="50px">
        <Input
          type="email"
          placeholder="E-mail address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          paddingY="24px"
          borderRight="none"
          borderRadius="0"
          sx={{
            "::placeholder": { color: "white" },
            "&:focus": { borderColor: "white", boxShadow: "none" },
          }}
          required
        />
        <Button
          fontSize="15px"
          lineHeight="120%"
          fontWeight="700"
          colorScheme="green"
          background="darkgreen"
          height="100%"
          borderRadius="none"
          onClick={handleSubscribe}
        >
          SUBSCRIBE
        </Button>
      </Box>
      {error && (
        <Text color="yellow" fontWeight="500" marginTop="10px">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default Subscription;
