/* eslint-disable react/no-unescaped-entities */
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import aboutBeer from "../../img/img/about-beer-img.jpg";

const AboutContent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ base: "80%", md: "65%", lg: "70%" }}
      margin="0 auto"
      alignItems={{ base: "center", lg: "unset" }}
      justifyContent="center"
    >
      <Text marginY="20px" fontSize="28px" fontWeight="500">
        About us
      </Text>
      <Box>
        <Image
          width={{ base: "100%", lg: "auto" }}
          height={{ base: "auto", lg: "420px" }}
          src={aboutBeer}
          float={{ base: "unset", lg: "left" }}
          margin={{ base: "0 auto", lg: "0" }}
          marginRight={{ base: "unset", lg: "20px" }}
          marginBottom={{ base: "unset", lg: "20px" }}
        />
        <Text
          fontWeight="700"
          marginBottom="20px"
          marginTop="20px"
          textAlign={{ base: "center", lg: "left" }}
          fontFamily="Questrial, sans-serif"
          fontSize="18px"
        >
          Story behind Beerdome
        </Text>
        <Text
          fontWeight="500"
          color="grey"
          textAlign={{ base: "left", lg: "left" }}
          fontSize="16px"
        >
          Beerdome originated from my own passion for craft beer. Because I can
          really enjoy good craft beer myself, I want to introduce as many
          people as possible to this. What started as a hobby has now grown into
          my more than full-time job and life's work. I think it's fantastic to
          discover new breweries and I like to share their beautiful beers with
          you in my webshop. I go for quality only; you won't find Beerdome
          beers in the average supermarket. Beerdome specializes in really good
          craft beers. Because these beers are often very limited, the range is
          constantly changing. Since I am always looking for the best craft
          beer, I also started importing beers myself. This allows Beerdome to
          offer you beers that you cannot find anywhere else in Europe. In
          addition, Beerdome distinguishes itself through the range of{" "}
          <RouteLink
            color="green"
            style={{ color: "lightgreen", textDecoration: "underline" }}
            to="/crowlers"
          >
            crowlers
          </RouteLink>
          . These crowlers give you the opportunity to drink very exclusive
          beers at home, which are sometimes only released in casks by the
          breweries.
        </Text>
        <Text
          float="left"
          marginTop="20px"
          color="grey"
          textAlign={{ base: "left", lg: "left" }}
        >
          The Beerdome team consists of beer lovers, who, like me, are
          incredibly passionate. Together we ensure that exclusive beers are
          available to all enthusiasts. Do you want to be the very first to know
          about our latest beers? Then follow Beerdome on{" "}
          <Link
            color="lightgreen"
            textDecoration="underline"
            href="https://untappd.com/v/beerdome/6159188"
            target="_blank"
          >
            Untappd
          </Link>
          !
        </Text>
        <Text float="left" marginTop="10px" color="darkgrey" fontStyle="italic">
          Ronald - founder and owner of Beerdome
        </Text>
      </Box>
    </Box>
  );
};

export default AboutContent;
