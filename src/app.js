import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux';
import Main from './main';

//Создаем хранилище
const store = createStore(allReducers);

ReactDom.render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);