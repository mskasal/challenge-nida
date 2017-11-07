import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StoreState } from './types';
import configureStore from './configure-store';
import './index.css';

const initialState: StoreState = {
  pokemons: {
    results: []
  },
  loading: false,
  error: null
};

export const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
