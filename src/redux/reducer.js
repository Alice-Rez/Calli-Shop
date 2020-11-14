import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STOCK":
      let changedProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.available = product.available + action.payload.value;
        }
        return product;
      });
      return {
        ...state,
        products: changedProducts,
      };
    default:
      return state;
  }
};

export default reducer;
