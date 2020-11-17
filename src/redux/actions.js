const BASKET_TOGGLE = "BASKET_TOGGLE";
const CHANGE_STOCK = "CHANGE_STOCK";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const ADD_ORDER_DETAILS = "ADD_ORDER_DETAILS";

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

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
}

export function addOrderDetails(key, value) {
  return {
    type: ADD_ORDER_DETAILS,
    payload: { key, value },
  };
}
