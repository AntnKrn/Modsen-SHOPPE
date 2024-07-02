import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './services/firebaseConfig';

import { router } from './pages/router';
import { store } from './store/store';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}
createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
