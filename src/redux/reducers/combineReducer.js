import { combineReducers } from "redux";
import { productReducer } from "./productReducers";

const reducer = combineReducers({
  allProducts: productReducer,
});

export default reducer;
