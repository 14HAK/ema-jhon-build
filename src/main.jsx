import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Shop from './components/shop/Shop-area/Shop.jsx';
import Orders from './components/shop/orders/Orders.jsx';
import Inventory from './components/inventory/Inventory.jsx';
import Login from './components/login/Login.jsx';
import loadAllProducts from './components/loadData/LoadData.js';
import ErrorPage from './components/errorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
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
        element: <Inventory></Inventory>,
      },
      {
        path: '/login',
        element: <Login></Login>,
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
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
