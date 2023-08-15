import beer1 from "../img/beer1.png";
import beer2 from "../img/beer2.png";
import beer3 from "../img/beer3.png";
import beer4 from "../img/beer4.png";
import beer5 from "../img/beer5.png";
import beer6 from "../img/beer6.png";

let lastId = 0;

export const mainGoods = [
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

export const additionalGoods = [
  {
    id: ++lastId,
    brand: "Mystic Ales",
    name: "Mystic Ales - Enchanted Elixir (2023)",
    price: 22.99,
    description:
      "A mystical concoction brewed under a full moon, featuring rare herbs and enchanted botanicals. This elixir offers a harmonious blend of earthy flavors and ethereal aromas.",
    rating: 4.9,
    // img: beer7,
  },
  {
    id: ++lastId,
    brand: "Ethereal Brews",
    name: "Ethereal Brews - Stardust Saison",
    price: 14.49,
    description:
      "Brewed with stardust harvested from a comet's tail, this saison offers a celestial blend of cosmic fruitiness and a hint of intergalactic spices.",
    rating: 4.7,
    // img: beer8,
  },
  {
    id: ++lastId,
    brand: "Whimsy Spirits",
    name: "Whimsy Spirits - Faerie Fizz (Limited Edition)",
    price: 19.99,
    description:
      "Bottled with the laughter of forest faeries, this limited edition brew delights with notes of enchanted berries and a touch of pixie mischief.",
    rating: 4.6,
    // img: beer9,
  },
  {
    id: ++lastId,
    brand: "AetherCraft",
    name: "AetherCraft - Nebula Nectar IPA",
    price: 17.99,
    description:
      "Brewed using rare hops cultivated in the heart of a distant nebula, this IPA bursts with nebulous flavors and a cosmic burst of tropical fruitiness.",
    rating: 4.8,
    // img: beer10,
  },
  {
    id: ++lastId,
    brand: "Sorcerer's Sips",
    name: "Sorcerer's Sips - Arcane Amaretto Ale",
    price: 15.79,
    description:
      "Infused with the essence of ancient amaretto spells, this ale offers a magical blend of nutty sweetness and a whisper of enchanting spices.",
    rating: 4.7,
    // img: beer11,
  },
  {
    id: ++lastId,
    brand: "Alchemy Ales",
    name: "Alchemy Ales - Ephemeral Euphoria",
    price: 21.49,
    description:
      "Crafted with ephemeral essences harvested at dawn, this ale delivers fleeting moments of blissful flavors, leaving behind a trace of ethereal satisfaction.",
    rating: 4.9,
    // img: beer12,
  },
  {
    id: ++lastId,
    brand: "Dreamweaver Brews",
    name: "Dreamweaver Brews - Luminous Lullaby Porter",
    price: 16.49,
    description:
      "Brewed to capture the essence of starlit dreams, this porter enchants with velvety notes of dark chocolate, roasted marshmallows, and a touch of moonlit vanilla.",
    rating: 4.8,
    // img: beer13,
  },
  {
    id: ++lastId,
    brand: "Mythos Libations",
    name: "Mythos Libations - Centaur's Cyser (2023)",
    price: 24.99,
    description:
      "A blend of honey mead and celestial apple nectar, this cyser pays homage to ancient centaur traditions, offering a harmonious balance of honeyed sweetness and crisp apple tang.",
    rating: 4.7,
    // img: beer14,
  },
  {
    id: ++lastId,
    brand: "Druid's Delight",
    name: "Druid's Delight - Enchanted Elderflower Elixir",
    price: 18.99,
    description:
      "Brewed with elderflowers harvested at the peak of a solstice sunrise, this elixir delights with the delicate essence of ancient woodland blooms and a hint of druidic wisdom.",
    rating: 4.6,
    // img: beer15,
  },
  {
    id: ++lastId,
    brand: "Celestial Sours",
    name: "Celestial Sours - Moonlit Mulberry Sour",
    price: 15.79,
    description:
      "Infused with the luminescent glow of moonlit mulberries, this sour ale dances on the palate with a symphony of tartness and a touch of midnight magic.",
    rating: 4.8,
    // img: beer16,
  },
];

const allGoods = mainGoods.concat(additionalGoods);

export default allGoods;
