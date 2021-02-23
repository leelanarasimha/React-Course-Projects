import { createStore } from 'redux';
import { CounterReducer } from './reducers/CounterReducer';

export const store = createStore(CounterReducer);
