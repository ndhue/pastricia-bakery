import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import store from "./controller/store"
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
