import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Shop from './components/shop/Shop-area/Shop.jsx';
import Orders from './components/shop/orders/Orders.jsx';
import Inventory from './components/inventory/Inventory.jsx';
import Login from './components/login/Login.jsx';
import loadAllProducts from './components/loadData/LoadData.js';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Resister from './components/resister/Resister';
import Checkout from './components/private/checkoutCart/Checkout';
import PrivateRoute from './components/private/PrivateRoute';
import Context from './Context/Context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: loadAllProducts,
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: loadAllProducts,
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: loadAllProducts,
      },
      {
        path: '/inventory',
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/resister',
        element: <Resister></Resister>,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </React.StrictMode>
);
