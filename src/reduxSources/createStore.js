import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export const initStore = () => createStore(rootReducer);
