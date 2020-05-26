import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { creatStore} from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

const store = creatStore(reducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider>
    <App />
    </Provider>, 
    rootElement
    );
