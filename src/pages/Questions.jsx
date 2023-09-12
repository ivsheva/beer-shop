import ServicePage from "../components/ServicePage/ServicePage";
import questionBg from "../img/img/faq-bg.jpg";
import paragraphs from "../data/questionsParagraphs";

const Questions = () => {
  return (
    <ServicePage
      data={{
        img: questionBg,
        posterTitle: "FAQ",
        title: "FAQ",
        contentTitle: "About Beerdome",
        content:
          "Beerdome is a webshop that specializes in really good craft beers. At Beerdome you will not find many beers that you can also buy in your local supermarket. The desire to start with Beerdome derives from our passion for craft beer. We want to introduce as many people as possible to really good craft beers!",
        paragraphs,
      }}
    />
  );
};

export default Questions;
