import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import {Provider} from 'react-redux';
import store from './store';

const App = (
    <Provider store={store}>{/*让Provieder里面所有的组件都有能力获取store里面的内容*/}
        <Todolist/>
    </Provider> 
);

ReactDOM.render(App, document.getElementById('root'));

