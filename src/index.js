import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {questionData} from "./store/mockQuestionData";

import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css';

ReactDOM.render(<App questionData={questionData}/>, document.getElementById('root'));
registerServiceWorker();
