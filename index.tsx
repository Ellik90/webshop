import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import CheckoutPage from "././src/pages/CheckoutPage";
import IndexPage from "././src/pages/IndexPage";
import RootLayout from "././src/pages/RootLayout";

import { CustomerProvider } from "././src/contexts/CustomerContext";
import ConfirmationPage from "./src/pages/ConfirmationPage";

import AdminPage from "./src/pages/AdminPage";
import AdminProductPage from "./src/pages/AdminProductPage";
import ProductPage from "./src/pages/ProductPage";
import { CartProvider } from "./src/contexts/CartContext";
import { OrderProvider } from "./src/contexts/OrderContext";
import { ProductProvider } from "./src/contexts/ProductContext";
import ErrorPage from "./src/pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<IndexPage />}></Route>

      <Route path="product/:id" element={<ProductPage />}></Route>

      <Route path="checkout" element={<CheckoutPage />}></Route>

      <Route path="confirmation" element={<ConfirmationPage />}></Route>

      <Route path="admin" element={<AdminPage />}></Route>
      <Route path="admin/product/:param" element={<AdminProductPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <CustomerProvider>
        <ProductProvider>
          <OrderProvider>
            <RouterProvider router={router} />
          </OrderProvider>
        </ProductProvider>
      </CustomerProvider>
    </CartProvider>
  </React.StrictMode>
);