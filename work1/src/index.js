import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
      {/* <Provider store={store}> */}
          {/*<PersistGate loading={null} persistor={persistedStore}>*/}
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          {/*</PersistGate>*/}
      {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);