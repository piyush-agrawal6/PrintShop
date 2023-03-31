import * as types from "./types";
import axios from "axios";

//Get all products
export const getProduct =
  (keyword = "", gender = "", page = 1, category = "", subcategory = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.ALL_PRODUCT_REQUEST });
      const data = await axios.get(
        `https://shy-lion-snaps.cyclic.app/product?keyword=${
          keyword || ""
        }&gender=${gender || ""}&page=${page}&category=${
          category || ""
        }&subcategory=${subcategory || ""}`
      );
      dispatch({ type: types.ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: types.ALL_PRODUCT_ERROR,
        payload: error?.response?.data.message,
      });
    }
  };

//Get product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_DETAILS_REQUEST });
    const data = await axios.get(
      `https://shy-lion-snaps.cyclic.app/product/${id}`
    );
    dispatch({
      type: types.PRODUCT_DETAILS_SUCCESS,
      payload: data.data.product,
    });
  } catch (error) {
    dispatch({
      type: types.PRODUCT_DETAILS_ERROR,
      payload: error?.response?.data.message,
    });
  }
};

//sorting and filtering product
export const sortProducts = (sort, order, shape) => async (dispatch) => {
  try {
    if (sort !== "" || order !== "" || shape !== "") {
      let url = `https://shy-lion-snaps.cyclic.app/product`;
      if (sort && shape) {
        url = `https://shy-lion-snaps.cyclic.app/product?shape=${shape}&sort=${sort}&orderBy=${order}`;
      } else if (sort || order) {
        url = `https://shy-lion-snaps.cyclic.app/product?sort=${sort}&orderBy=${order}`;
      } else if (shape) {
        url = `https://shy-lion-snaps.cyclic.app/product?shape=${shape}`;
      }
      dispatch({ type: types.PRODUCT_DETAILS_REQUEST });
      const data = await axios.get(url);
      dispatch({ type: types.ALL_PRODUCT_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: types.PRODUCT_DETAILS_ERROR,
      payload: error?.response?.data.message,
    });
  }
};
