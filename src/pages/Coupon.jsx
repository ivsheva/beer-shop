import ServicePage from "../components/ServicePage/ServicePage";
import couponBg from "../img/img/service-bg.jpg";
import paragraphs from "../data/saleParagraphs";

const Coupon = () => {
  return (
    <ServicePage
      data={{
        img: couponBg,
        posterTitle: "I Love Beerdome sale",
        title: "I Love Beerdome sale",
        paragraphs,
      }}
    />
  );
};

export default Coupon;
