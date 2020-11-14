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
    case "ADD_ITEM":
      return {
        ...state,
        order: {
          ...state.order,
          itemsNr: state.order.itemsNr + 1,
          items: [...state.order.items, action.payload],
        },
      };
    default:
      return state;
  }
};

export default reducer;
