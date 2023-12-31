import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import images from "../../data/images";
import darkerBg from "../../helpers/darkerBg";

const ImageSlider = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 3000,
    ref: slider,
  };

  return (
    <Box maxWidth="100%" overflow="hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={image.id}
            height="100%"
            position="relative"
            _before={darkerBg}
          >
            <Link to="all-beers">
              <Image
                src={image.src}
                maxWidth="100%"
                height={{ base: "550px", xl: "100%" }}
                fit="cover"
              />
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
              >
                <SliderTitle image={image} />
              </Box>
              <MainSlider slider={slider} index={index} />
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const SliderTitle = ({ image }) => {
  return (
    <>
      <Heading
        fontSize={{ base: "24px", sm: "36px", lg: "54px" }}
        fontWeight="700"
        lineHeight="1.2"
        color="white"
        maxWidth="100%"
        margin="0 auto"
      >
        {image.title}
      </Heading>
      <Text
        fontSize={{ base: "12px", sm: "20px", lg: "28px" }}
        color="white"
        maxWidth="100%"
        margin="10px auto"
      >
        {image.subtitle}
      </Text>
    </>
  );
};

const MainSlider = ({ slider, index }) => {
  return (
    <Center position="absolute" bottom="20px" width="100%" zIndex="1">
      <Stack direction="row" spacing="1">
        {images.map((_, buttonIndex) => (
          <Box
            key={buttonIndex}
            boxSize="4"
            marginLeft="5px"
            borderRadius="full"
            bg={buttonIndex === index ? "white" : "gray.500"}
            cursor="pointer"
            _hover={{ bg: "white" }}
            onClick={() => slider.current.slickGoTo(buttonIndex)}
          />
        ))}
      </Stack>
    </Center>
  );
};

export default ImageSlider;
