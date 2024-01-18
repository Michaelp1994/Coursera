import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./layouts/Layout";

export { RouterProvider };

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/menu",
                element: <MenuPage />,
            },
            {
                path: "/reservations",
                element: <ReservationPage />,
            },
            {
                path: "/order",
                element: <OrderPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "*",
                element: <PageNotFound />,
            },
        ],
    },
]);
