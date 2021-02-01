import cartReducer from "./cartReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  products: cartReducer,
  user: userReducer,
});
export default allReducers;
