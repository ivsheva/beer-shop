import wishReducer, {
  ADD_TO_WISH,
  REMOVE_FROM_WISH,
} from "../store/wishlistSlice";

describe("wishSlice", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("should add an item to the wishlist", () => {
    const product = {
      id: 1,
      name: "Shared - Parallels", // random beer name
    };
    const previousState = [];

    const result = wishReducer(previousState, ADD_TO_WISH(product));
    expect(result).toContainEqual(product);
  });

  test("should remove an item from the wishlist", () => {
    // create a product with random values to remove it later
    const product = {
      id: 3,
      name: "Spartacus - wolf inside",
    };
    // add to the previous state a product initially
    const previousState = [product];

    const result = wishReducer(previousState, REMOVE_FROM_WISH(product.id));

    expect(result).toEqual([]);
  });
});
