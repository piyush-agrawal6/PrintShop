import * as types from "./types";
const initialState = {
  cart: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CART_SUCCESS: {
      return { ...state, cart: action.payload };
    }
    case types.ADD_TO_CART_SUCCESS: {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default:
      return state;
  }
};
