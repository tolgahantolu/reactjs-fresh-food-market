import CartActionTypes from "./cart-actionTypes";

export const addItemToCart = (item) => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  payload: item,
});
