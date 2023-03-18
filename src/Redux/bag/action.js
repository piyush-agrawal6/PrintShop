import * as types from "./types";
import axios from "axios";

//get cart products
export const getCartProducts = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://shy-lion-snaps.cyclic.app/cart?userId=${id}`
    );
    dispatch({
      type: types.GET_CART_SUCCESS,
      payload: data.data.message,
    });
  } catch (error) {
    console.log(error);
  }
};

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
