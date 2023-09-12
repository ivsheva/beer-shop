import ServicePage from "../components/ServicePage/ServicePage";
import paymentBg from "../img/img/payment-methods-bg.jpg";
import paragraphs from "../data/paymentParagraphs";

const PaymentMethods = () => {
  return (
    <ServicePage
      data={{
        img: paymentBg,
        posterTitle: "Payment Methods",
        title: "How can I pay for my order?",
        paragraphs,
      }}
    />
  );
};

export default PaymentMethods;
