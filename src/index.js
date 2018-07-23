import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware , createStore  } from 'redux';
import thunk from 'redux-thunk';

import {updateScoreboard} from './store/actions/questions';

// CSS
import './index.css';
import 'antd/dist/antd.css';

import {AppContainer} from './App';
import {reducers} from './store/reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(thunk) );

//Initialise the scoreboard data on startup
store.dispatch(updateScoreboard());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
