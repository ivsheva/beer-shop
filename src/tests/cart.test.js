import cartReducer, { ADD_TO_CART, REMOVE_FROM_CART } from "../store/cartSlice";

describe("cartSlice", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("should add an item to the cart", () => {
    const product = {
      id: 1,
      name: "Shared - Parallels", // random beer name
    };
    const previousState = [];

    const result = cartReducer(previousState, ADD_TO_CART(product));
    expect(result).toContainEqual(product);
  });

  test("should remove an item from the cart", () => {
    // create a product with random values to remove it later
    const product = {
      id: 3,
      name: "Spartacus - wolf inside",
    };
    // add to the previous state a product initially
    const previousState = [product];

    const result = cartReducer(previousState, REMOVE_FROM_CART(product.id));

    expect(result).toEqual([]);
  });
});
