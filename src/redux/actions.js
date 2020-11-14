const CHANGE_STOCK = "CHANGE_STOCK";
const ADD_ITEM = "ADD_ITEM";

export function changeProductStock(id, value) {
  return {
    type: CHANGE_STOCK,
    payload: { id, value },
  };
}

export function addItemToOrder(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}
