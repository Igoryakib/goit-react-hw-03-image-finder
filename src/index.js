import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import './scss/style.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
ReactDom.render(
<React.StrictMode>
<App/>
</React.StrictMode>
, document.querySelector('#root'));