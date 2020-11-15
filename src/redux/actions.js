const BASKET_TOGGLE = "BASKET_TOGGLE";
const CHANGE_STOCK = "CHANGE_STOCK";
const ADD_ITEM = "ADD_ITEM";

export function toggleBasketVisibility() {
  return {
    type: BASKET_TOGGLE,
  };
}

export function changeProductStock(id, value) {
  return {
    type: CHANGE_STOCK,
    payload: { id, value },
  };
}

export function addItemToOrder(item, value = 0) {
  return {
    type: ADD_ITEM,
    payload: { item, value },
  };
}
