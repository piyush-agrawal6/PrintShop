import { combineReducers } from "redux";

import { orderReducer } from "./order/reducer";
import { authReducer } from "./auth/reducer";
import { cartReducer } from "./bag/reducer";
import { productReducer } from "./product/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  carts: cartReducer,
  orders: orderReducer,
});
