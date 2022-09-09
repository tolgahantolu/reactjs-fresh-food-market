import CartActionTypes from "./cart-actionTypes";
import { addToCart, removeFromCart } from "./cart-utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === CartActionTypes.CART_ADD_ITEM) {
    return {
      ...state,
      cartItems: addToCart(state.cartItems, action.payload),
    };
  }

  if (action.type === CartActionTypes.CART_REMOVE_ITEM) {
    return {
      ...state,
      cartItems: removeFromCart(state.cartItems, action.payload),
    };
  }

  return state;
};

export default cartReducer;
