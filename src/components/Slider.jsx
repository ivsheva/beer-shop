import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
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
        {goods.map((beerItem) => (
          <SwiperSlide key={beerItem.id} style={{ maxWidth: "300px" }}>
            <BeerCard
              img={beerItem.img}
              brand={beerItem.brand}
              name={beerItem.name}
              price={beerItem.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

Slider.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
