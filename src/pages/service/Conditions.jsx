import ServicePage from "../../components/ServicePage/ServicePage";
import conditionsBg from "../../img/img/service-bg.jpg";
import paragraphs from "../../data/paragraphs/conditionsParagraphs";

const Conditions = () => {
  return (
    <ServicePage
      data={{
        img: conditionsBg,
        posterTitle: "Terms and Conditions",
        title: "Terms and Conditions",
        paragraphs,
      }}
    />
  );
};

export default Conditions;
