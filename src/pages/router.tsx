import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';

import { App } from '../components/App';
import { RootState } from '../store/store';

import { Authorization } from './Authorization';
import { BusketPage } from './BusketPage';
import { ContactPage } from './ContactPage';
import { ErrorPage } from './ErrorPage';
import { MainPage } from './MainPage';
import { ProductPage } from './ProductPage';
import { ShopPage } from './ShopPage';

const Guard = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  if (isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: 'cart', element: <BusketPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      {
        path: 'authorization',
        element: (
          <Guard>
            <Authorization />
          </Guard>
        ),
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
