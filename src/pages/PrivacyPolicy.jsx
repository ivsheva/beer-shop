import ServicePage from "../components/ServicePage/ServicePage";
import privacyBg from "../img/img/service-bg.jpg";
import paragraphs from "../data/privacyParagraphs";

const PrivacyPolicy = () => {
  return (
    <ServicePage
      data={{
        img: privacyBg,
        posterTitle: "Privacy Policy",
        title: "Privacy Policy",
        paragraphs,
      }}
    />
  );
};

export default PrivacyPolicy;
