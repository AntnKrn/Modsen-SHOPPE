import { createRoot } from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './utils/firebaseConfig';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}
createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
