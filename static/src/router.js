import { createBrowserRouter } from "react-router-dom";
import { Root, Products, Users, Cart } from "./pages";
import { loader as productsLoader } from "./pages/products";
import ProductDetail from "./pages/products/detail";
import UpdateProduct from "./pages/products/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/new",
        element: <ProductDetail editable={true} />,
      },
      {
        path: "products/:id",
        element: <UpdateProduct />,
      },
    ],
  },
]);

export default router;
