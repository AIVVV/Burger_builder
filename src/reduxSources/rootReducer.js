import { combineReducers } from "redux";
import { burgerReducer } from "../containers/BurgerBuilder/BurgerBuilder-reducer";
import { ordersReducer } from "../containers/Orders/Orders-reducer";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  orders: ordersReducer
});
