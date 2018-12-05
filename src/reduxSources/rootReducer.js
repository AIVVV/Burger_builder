import { combineReducers } from 'redux';
import { burgerReducer } from '../containers/BurgerBuilder/BurgerBuilder-reducer';

export const rootReducer = combineReducers({
  burger: burgerReducer
});
