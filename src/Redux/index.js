import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { productReducer } from "./product/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});
