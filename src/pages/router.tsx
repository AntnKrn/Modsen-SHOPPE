import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { BusketPage } from './BusketPage/BusketPage';
import { ContactPage } from './ContactPage/ContactPage';
import { ShopPage } from './ShopPage/ShopPage';
import { ProductPage } from './ProductPage/ProductPage';
import { App } from '../components/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: 'busket', element: <BusketPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

/* 
[
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'busket', element: <BusketPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'error', element: <ErrorPage /> },
    ],
  },
  /* {path: "busket", element: <BusketPage />}
] */
