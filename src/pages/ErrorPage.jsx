/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import errorBg from "../img/img/error-bg.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      width="100%"
      position="relative"
      bgImage={errorBg}
      height="800px"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        color="white"
        display="flex"
        flexDirection="column"
        textAlign="center"
        zIndex="1"
        rowGap="20px"
      >
        <Text>404 ERROR</Text>
        <Heading fontFamily="Questrial, sans-serif" fontSize="48px">
          Uh oh! I think you're lost
        </Heading>
        <Text fontWeight="600" paddingX="16px">
          It seems that the page you are looking for does not exist.
        </Text>
        <Button
          bg="white"
          _hover={{
            bg: "white",
          }}
          maxWidth="170px"
          height="50px"
          margin="0 auto"
          borderRadius="100px"
          fontSize="14px"
          onClick={() => navigate("/")}
        >
          Go back to home
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
