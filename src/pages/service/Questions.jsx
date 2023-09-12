import ServicePage from "../../components/ServicePage/ServicePage";
import questionBg from "../../img/img/faq-bg.jpg";
import paragraphs from "../../data/paragraphs/questionsParagraphs";

const Questions = () => {
  return (
    <ServicePage
      data={{
        img: questionBg,
        posterTitle: "FAQ",
        title: "FAQ",
        paragraphs,
      }}
    />
  );
};

export default Questions;
