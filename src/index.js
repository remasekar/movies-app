import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import configStore from '../src/store/store'


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

export const store = configStore()

store.subscribe (() => {
    console.log(store.getState())
})

const app = (
    <Provider store={store}>
    <App/>  
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

