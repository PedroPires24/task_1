import {createStore} from 'redux';
import comb_reducers from './reducers';

const store = createStore(comb_reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;