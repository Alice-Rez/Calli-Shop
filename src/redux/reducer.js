import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  let newSum;
  let changedItems;
  switch (action.type) {
    case "BASKET_TOGGLE":
      return {
        ...state,
        isInBasket: !state.isInBasket,
      };
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
      let itemExists = false;
      changedItems = state.order.items.map((item) => {
        if (item.id === action.payload.item.id) {
          if (action.payload.value === 0) {
            item.qty = item.qty + action.payload.item.qty;
            item.priceSum = item.priceSum + action.payload.item.priceSum;
            newSum = state.order.priceSumTotal + action.payload.item.priceSum;
          } else {
            item.qty = item.qty + action.payload.value;
            item.priceSum =
              item.priceSum + action.payload.value * action.payload.item.price;
            newSum =
              state.order.priceSumTotal +
              action.payload.value * action.payload.item.price;
          }
          itemExists = true;
        }
        return item;
      });
      if (!itemExists) {
        return {
          ...state,
          order: {
            ...state.order,
            itemsNr: state.order.itemsNr + 1,
            priceSumTotal:
              state.order.priceSumTotal + action.payload.item.priceSum,
            items: [...state.order.items, action.payload.item],
          },
        };
      } else {
        return {
          ...state,
          order: { ...state.order, priceSumTotal: newSum, items: changedItems },
        };
      }
    case "DELETE_ITEM":
      state.order.items.map((item) => {
        if (item.id === action.payload) {
          newSum = state.order.priceSumTotal - item.priceSum;
        }
        return item;
      });
      changedItems = state.order.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        order: {
          ...state.order,
          itemsNr: state.order.itemsNr - 1,
          priceSumTotal: newSum,
          items: changedItems,
        },
      };
    case "ADD_ORDER_DETAILS":
      return {
        ...state,
        order: {
          ...state.order,
          details: {
            ...state.order.details,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
