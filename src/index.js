import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {configureStore} from './store';
import './index.css';
import App from "./App/App.js"
import registerServiceWorker from './registerServiceWorker';
import { watcherSaga } from "./sagas";
import 'bootstrap/dist/css/bootstrap.min.css';

const configuredStore = configureStore();

configuredStore.sagaMiddleWare.run(watcherSaga);

ReactDOM.render(
 <Provider store={configuredStore.store}>
  <App />
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();