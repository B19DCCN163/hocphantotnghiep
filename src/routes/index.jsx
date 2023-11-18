import React from "react";
import Home from "../view/pages/Home";
import AdminDashboard from "../view/pages/AdminDashboard";
import ProductList from "../view/pages/ProductList";
import Cart from "../view/pages/Cart";
import PublicLayout from "../view/layouts/PublicLayout";
import Register from "../view/pages/Register";
import Login from "../view/pages/Login";
import ProductDetail from "../view/pages/ProductDetail";
import Checkout from "../view/pages/Checkout";
import DashboardLayout from "../view/layouts/DashboardLayout";
import ManageProduct from "../view/pages/AdminDashboard/ManageProduct";
import ManageOrder from "../view/pages/AdminDashboard/ManageOrder";
import ManageUser from "../view/pages/AdminDashboard/ManageUser";


const routes = [
    {
        path: "/",
        element: <PublicLayout />,
        routes: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "products",
                element: <ProductList />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "product",
                element: <ProductDetail />
            },
            {
                path: "cart/checkout",
                element: <Checkout />
            }
        ]
    },
    {
        path: "/admin",
        element: <DashboardLayout />,
        routes: [
            {
                path: "",
                element: <AdminDashboard />
            },
            {
                path: "products",
                element: <ManageProduct />
            },
            {
                path: "orders",
                element: <ManageOrder />
            },
            {
                path: "users",
                element: <ManageUser />
            },
        ]
    },


];

export default routes

