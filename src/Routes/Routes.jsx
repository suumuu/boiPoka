import { createBrowserRouter } from "react-router-dom";
// ...existing code...
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import Loginpage from "../Pages/loginPage";
import ProductDetails from "../Pages/ProductDetails";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    hydrateFallbackElement: <p>loading....</p>,
    children:[
          {
    index:true,
    element: <Home/>,
    loader:() => fetch('./furnitureData.json')
  },

  {
    path: "/products",
    element: <Products/>,
  },

  {
    path: "/wishlist",
    element: <Wishlist/>,
  },

  {
    path: "/loginpage",
    element: <Loginpage/>,
  },

  {
    path: "/product/:id",
    element: <ProductDetails/>,
  },
    {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/register",
    element: <Register/>,
  }
    ]
  },
]);
