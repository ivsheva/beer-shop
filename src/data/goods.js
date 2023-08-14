import beer1 from "../img/beer1.png";
import beer2 from "../img/beer2.png";
import beer3 from "../img/beer3.png";
import beer4 from "../img/beer4.png";
import beer5 from "../img/beer5.png";
import beer6 from "../img/beer6.png";

let lastId = 0;

const goods = [
  {
    id: ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Cuvée Saint-Gilloise (Champions) (2023)",
    price: 18.99,
    description:
      "Two-year-old lambic in which fresh HallertauMittelfrüh hops have been soaked. A perfect balance is struck between the lambic’s natural acidity and the Hallertau hops’ refined bitterness. Max 1pp.",
    rating: 4.8,
    img: beer1,
  },
  {
    id: ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Rosé de Gambrinus (2023)",
    price: 16.99,
    description:
      "Blend of lambics and raspberries - 200 g of raspberries per litre of beer. Beer with a slightly acidic, fruity and fragrant taste.",
    rating: 4.8,
    img: beer2,
  },
  {
    id: ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Rosé de Gambrinus (2023) 37,5cl",
    price: 10.49,
    description:
      "Blend of lambics and raspberries - 200 g of raspberries per litre of beer. Beer with a slightly acidic, fruity and fragrant taste.",
    rating: 4.8,
    img: beer3,
  },
  {
    id: ++lastId,
    brand: "Cantillon",
    name: "Cantillon - Kriek 100% Lambic Bio (2023)",
    price: 16.99,
    description:
      "Blend of lambics and sour cherries - 200 g of cherries per litre of beer. Beer with a slightly acidic taste of red fruit complemented with subtle almond flavours.",
    rating: 4.8,
    img: beer4,
  },
  {
    id: ++lastId,
    brand: "Lervig",
    name: "Lervig / Pulpit Rock - Kransekake Stout)",
    price: 5.79,
    description:
      'Imperial Stout with Norwegian “kransekake" added. Immerse your taste buds in a symphony of flavors as sweet vanilla, sugar, coffee, and roasted almonds dance harmoniously on your palate.',
    rating: 4.8,
    img: beer5,
  },
  {
    id: ++lastId,
    brand: "Het Boerenerf",
    name: "Het Boerenerf - Zomerkriek - Oogst 2022",
    price: 25.49,
    description:
      "Blend of lambic macerated with organic cherries and cider. The fruit is blended with lambic then macerated for months. After this, the lambic matures further on barrel. The final blend with cider is done just before bottling.",
    rating: 4.8,
    img: beer6,
  },
];

export default goods;
