import React from "react";
import Home from "../view/pages/Home";
import Search from "../view/pages/Search"
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
import Account from "../view/pages/Account";
import Info from "../view/pages/Account/Info";
import Orders from "../view/pages/Account/Orders";
import AccountHome from "../view/pages/Account/Home";
import AddProduct from "../view/pages/AdminDashboard/components/AddProduct";
import EditProduct from "../view/pages/AdminDashboard/components/EditProduct";


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
                path: "product/:id",
                element: <ProductDetail />
            },
            {
                path: "cart/checkout",
                element: <Checkout />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: "/account",
                element: <Account />,
                routes: [
                    {
                        path: "",
                        element: <AccountHome />
                    },
                    {
                        path: "info",
                        element: <Info />
                    },
                    {
                        path: "orders",
                        element: <Orders />
                    }
                ]
            },
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
                path: "products/add",
                element: <AddProduct />
            },
            {
                path: "products/edit/:id",
                element: <EditProduct />
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

