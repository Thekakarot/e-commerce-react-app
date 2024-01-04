import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css'
import App from './App';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store';
import { app } from './firebase/Firebase';
import { UserAuthContextProvider } from './context/UserAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} app={app} >
     <PersistGate loading={"loading"} persistor={persistor}>
     <UserAuthContextProvider>
      <App />
      </UserAuthContextProvider>
    </PersistGate>
  </Provider>
);

