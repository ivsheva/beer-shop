let lastId = 0;

const paymentParagraphs = [
  {
    id: ++lastId,
    title: "",
    content: `You can easily pay for your order via iDEAL, Klarna, SOFORT, <b>PayPal, Bancontact, VISA, Mastercard, Giropay, KBC, Belfius, Maestro & Cartes Bancaires</b>. If for some reason your payment fails, or if you wish to pay using another method, then follow these steps to complete the payment:
    <br>
    <br>
    Log into your account 
    <br> 
    Choose "My Orders"
    <br>
    Click "pay now" on the outstanding invoice and follow the steps to complete payment.
    `,
  },
];

export default paymentParagraphs;
