import { Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BeerCard from "./BeerCard";

const Slider = ({ goods }) => {
  return (
    <Box width="100%" paddingX="16px">
      <Swiper modules={[Navigation]} slidesPerView={4} navigation loop={true}>
        {goods.map((beerItem) => (
          <SwiperSlide key={beerItem.id}>
            <BeerCard
              img={beerItem.img}
              brand={beerItem.brand}
              name={beerItem.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
