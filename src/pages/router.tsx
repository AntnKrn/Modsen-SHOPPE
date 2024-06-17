import { createBrowserRouter } from 'react-router-dom';
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
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: 'busket', element: <BusketPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'error', element: <ErrorPage /> },
    ],
  },
  /* {path: "busket", element: <BusketPage />} */
]);
