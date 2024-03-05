import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./pages/style.css"
import Main from './pages/Main';
import { Provider } from 'react-redux';
import {store} from "./Redux/store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Main></Main>
    </Provider>
  </React.StrictMode>
);
