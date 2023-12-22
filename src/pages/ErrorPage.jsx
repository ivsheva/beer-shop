/* eslint-disable react/no-unescaped-entities */
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import darkerBg from "../helpers/darkerBg";
import errorBg from "../img/img/error-bg.jpg";
import useTitle from "../hooks/useTitle";

const ErrorPage = ({ errorHeading, errorContent }) => {
  const navigate = useNavigate();

  useTitle("Error");

  return (
    <Flex
      width="100%"
      position="relative"
      bgImage={errorBg}
      height="800px"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      direction="column"
      justify="center"
      align="center"
      _before={darkerBg}
    >
      <Flex
        color="white"
        direction="column"
        textAlign="center"
        zIndex="1"
        rowGap="20px"
      >
        <Text>404 ERROR</Text>
        <Heading fontFamily="Questrial, sans-serif" fontSize="48px">
          {errorHeading}
        </Heading>
        <Text fontWeight="600" paddingX="16px">
          {errorContent}
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
      </Flex>
    </Flex>
  );
};

export default ErrorPage;
