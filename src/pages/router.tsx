import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import { MainPage } from './MainPage';
import { ErrorPage } from './ErrorPage';
import { BusketPage } from './BusketPage';
import { ContactPage } from './ContactPage';
import { ShopPage } from './ShopPage';
import { ProductPage } from './ProductPage';
import { App } from '../components/App';
import { Authorization } from './Authorization';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ReactElement } from 'react';

const Reder = ({ children }: any) => {
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
      { path: 'busket', element: <BusketPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      {
        path: 'authorization',
        element: (
          <Reder>
            <Authorization />
          </Reder>
        ),
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
