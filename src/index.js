import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
//import the Provider compoment to connect our React App with Redux
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store = {store}>
        <App />

    </Provider>,
    document.getElementById('root')
    
);

//export default store;