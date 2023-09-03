import beer1 from "../img/img/beer1.png";
import beer2 from "../img/img/beer2.png";
import beer3 from "../img/img/beer3.png";
import beer4 from "../img/img/beer4.png";
import beer5 from "../img/img/beer5.jpg";
import beer6 from "../img/img/beer6.jpg";
import beer7 from "../img/img/beer7.jpg";
import beer8 from "../img/img/beer8.jpg";
import beer9 from "../img/img/beer9.jpg";
import beer10 from "../img/img/beer10.jpg";
import beer11 from "../img/img/beer11.jpg";
import beer12 from "../img/img/beer12.jpg";
import beer13 from "../img/img/beer13.jpg";
import beer14 from "../img/img/beer14.jpg";
import beer15 from "../img/img/beer15.jpg";
import beer16 from "../img/img/beer16.jpg";

let lastId = 0;
const prefix = "main_";

export const mainProducts = [
  {
    id: prefix + ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Cuvée Saint-Gilloise (Champions) (2023)",
    price: 18.99,
    description:
      "Two-year-old lambic in which fresh HallertauMittelfrüh hops have been soaked. A perfect balance is struck between the lambic’s natural acidity and the Hallertau hops’ refined bitterness. Max 1pp.",
    rating: 4.8,
    img: beer1,
  },
  {
    id: prefix + ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Rosé de Gambrinus (2023)",
    price: 16.99,
    description:
      "Blend of lambics and raspberries - 200 g of raspberries per litre of beer. Beer with a slightly acidic, fruity and fragrant taste.",
    rating: 4.8,
    img: beer2,
  },
  {
    id: prefix + ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Rosé de Gambrinus (2023) 37,5cl",
    price: 10.49,
    description:
      "Blend of lambics and raspberries - 200 g of raspberries per litre of beer. Beer with a slightly acidic, fruity and fragrant taste.",
    rating: 4.8,
    img: beer3,
  },
  {
    id: prefix + ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Kriek 100% Lambic Bio (2023)",
    price: 16.99,
    description:
      "Blend of lambics and sour cherries - 200 g of cherries per litre of beer. Beer with a slightly acidic taste of red fruit complemented with subtle almond flavours.",
    rating: 4.8,
    img: beer4,
  },
  {
    id: prefix + ++lastId,
    brand: "Lervig",
    name: "Lervig / Pulpit Rock - Kransekake Stout)",
    price: 5.79,
    description:
      'Imperial Stout with Norwegian “kransekake" added. Immerse your taste buds in a symphony of flavors as sweet vanilla, sugar, coffee, and roasted almonds dance harmoniously on your palate.',
    rating: 4.8,
    img: beer5,
  },
  {
    id: prefix + ++lastId,
    brand: "Het Boerenerf",
    name: "Het Boerenerf - Zomerkriek - Oogst 2022",
    price: 25.49,
    description:
      "Blend of lambic macerated with organic cherries and cider. The fruit is blended with lambic then macerated for months. After this, the lambic matures further on barrel. The final blend with cider is done just before bottling.",
    rating: 4.8,
    img: beer6,
  },
  {
    id: prefix + ++lastId,
    brand: "Puhaste",
    name: "Pühaste - Surmapatt Sauternes/Port/Whisky BA (Silver Series)",
    price: 9.79,
    description: "Triple barrel aged version of Surmapatt imperial porter.",
    rating: 4.8,
    img: beer7,
  },
  {
    id: prefix + ++lastId,
    brand: "Basqueland",
    name: "Basqueland - Prime Time",
    price: 25.49,
    description:
      "Triple IPA with a dry-hop of Mosaic, Vista, Idaho7 and Mosaic Cryo hops for massive aromas: ripe tropical fruit with layers of yellow peach, mandarin zest, pear compote, orange marmalade and green tea.",
    rating: 4.8,
    img: beer8,
  },
];

export const additionalProducts = [
  {
    id: prefix + ++lastId,
    brand: "Side Project",
    name: "Shared - Parallels",
    price: 71.99,
    description:
      "A double BA version of the Parfait base - a blend of barrel aged &amp; oak aged Imperial Stouts which were blended and then racked back (double barrel aged) into Willett Barrels. Finished with fresh ground cinnamon sticks, vanilla and barrel aged maple syrup.",
    rating: 4.9,
    img: beer9,
  },
  {
    id: prefix + ++lastId,
    brand: "Folkingbrew",
    name: "Folkingbrew - Dreamscape",
    price: 6.49,
    description:
      "Double New England IPA hopped with Simcoe, Nelson Sauvin & Citra",
    rating: 4.7,
    img: beer10,
  },
  {
    id: prefix + ++lastId,
    brand: "Croma",
    name: "Croma - Follow Me (Bourbon Barrel Aged)",
    price: 28.99,
    description:
      "This adjunct-free Imperial Stout offers a distinctive mix of chocolate, coffee and toasted oak flavors, thanks to aging in Four Roses and Woodford Reserve Bourbon barrels. Subtle hints of vanilla and caramel, smooth texture.",
    rating: 4.6,
    img: beer11,
  },
  {
    id: prefix + ++lastId,
    brand: "Spartacus",
    name: "Spartacus - Wolf inside",
    price: 6.49,
    description: "Triple New England IPA with Motueka, Citra and Galaxy hops.",
    rating: 4.8,
    img: beer12,
  },
  {
    id: prefix + ++lastId,
    brand: "Folkingbrew",
    name: "Folkingbrew - Under the Sea",
    price: 6.49,
    description:
      "Tropical New England IPA brewed with Cascade and Strata hops, imparting citrus and pine notes. Dry-hopped with Strata, Citra, El Dorado, and Talus, creating juicy fruitiness with flavors of mango, passion fruit and citrus.",
    rating: 4.7,
    img: beer13,
  },
  {
    id: prefix + ++lastId,
    brand: "FrauGruber",
    name: "FrauGruber - Back To It",
    price: 6.79,
    description: "Double New England IPA with HBC 630.",
    rating: 4.7,
    img: beer14,
  },
  {
    id: prefix + ++lastId,
    brand: "CRAK",
    name: "CRAK - Take Me Home",
    price: 6.99,
    description:
      "Take me home, from the Veneto 'para casa', the last beer of the evening, the one you drink before going home. Dense and oily Imperial Stout, with notes of coffee and chocolate and a delicate roasted bitterness at the end.",
    rating: 4.7,
    img: beer15,
  },
  {
    id: prefix + ++lastId,
    brand: "Basqueland",
    name: "Basqueland - Trailblazer",
    price: 6.99,
    description:
      "Walk on this innovative path with dried passion fruit-fused hop blend, Kohia Nelson, from New Zealand. This New England IPA unfolds brilliant aromas and flavors of sweet passion fruit and zesty tangerine that will blow your mind.",
    rating: 4.7,
    img: beer16,
  },
];

const allProducts = mainProducts.concat(additionalProducts);

export default allProducts;
