let lastId = 0;

const saleParagraphs = [
  {
    id: ++lastId,
    title: "",
    content: `
    <img src="https://cdn.webshopapp.com/shops/262165/files/406502519/untappd-promo-image-beerdome.jpg" style="margin-top: 20px; margin-bottom: 20px" >
    The summer vacation has come to an end and it's time to head back to work. To beat the post-vacation blues, it's time to replenish your beer stock! <b>Beerdome has added 100 beers to the SALE with discounts of up to 25%!</b> And that's not all; you can get a <b>10% discount</b> on our beers (excluding SALE items) with the code below:`,
  },
  {
    id: ++lastId,
    title: "",
    content: `
      <h1 style="color: red; font-size: 30px; margin-top: 50px" >ILOVEBEERDOME10</h1>
      <br>
      <br>
      Valid from 31-08-2023 0.00 until 03-09-2023 23.59
      <br>
      <br>
      Pay attention:
      <br>
      <br>
      -You must enter the discount code in your shopping cart before checkout.
      <br>
      -It is not possible to add a discount code after you have placed the order.
      <br>
      -If you have placed an order without a discount code and you then find out that       a discount code is active, the difference in discount will not be settled.      Therefore, check carefully whether you have added the discount code. The      discount code cannot be applied to open orders.
      <br>
      -You can enter one discount code per order.
      <br>
      -Not valid in combination with other discount codes or gift vouchers.
      <br>
      -It is also not possible to use the discount code and points of the Beerdome      loyalty program at the same time. You do earn loyalty points with your order if     you use the discount code.
      <br>
      -Valid for orders from € 50.00 (excluding shipping costs).
      <br>
      -Not valid when purchasing a gift voucher.
      <br>
      -Not valid when purchasing beer bundles.
      <br>
      -Not valid when purchasing SALE items.`,
  },
];

export default saleParagraphs;
