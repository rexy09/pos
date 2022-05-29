import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import 'react-notification-components/dist/index.css';
import { NotificationsProvider } from 'react-notification-components';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NotificationsProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </NotificationsProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
