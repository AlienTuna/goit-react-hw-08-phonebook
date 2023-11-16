import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={<p>Loading...</p>} persistor={persistor}> */}
    <React.StrictMode basename="/goit-react-hw-08-phonebook">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>
);
