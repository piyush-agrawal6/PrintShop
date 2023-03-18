import * as types from "./types";
import axios from "axios";

//add to cart
export const addToCart = (cartData) => async (dispatch) => {
  try {
    const data = await axios.post(
      `https://shy-lion-snaps.cyclic.app/cart`,
      cartData
    );
    dispatch({
      type: types.ADD_TO_CART_SUCCESS,
      payload: { ...cartData.product, quantity: cartData.quantity },
    });
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
