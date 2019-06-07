import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import configStore from '../src/store/store'

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

