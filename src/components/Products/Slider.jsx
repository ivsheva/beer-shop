import { Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BeerCard from "./BeerCard";

const Slider = ({ goods }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      maxWidth="80%"
      width="100%"
      paddingX="16px"
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={100}
        slidesPerView="auto"
        navigation
        loop={true}
      >
        {goods.map((product) => (
          <SwiperSlide key={product.id} style={{ maxWidth: "300px" }}>
            <BeerCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
