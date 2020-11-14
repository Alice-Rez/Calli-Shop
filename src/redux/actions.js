const CHANGE_STOCK = "CHANGE_STOCK";

export function changeProductStock(id, value) {
  return {
    type: CHANGE_STOCK,
    payload: { id, value },
  };
}
