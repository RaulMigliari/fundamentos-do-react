import AdminHome from "./pages/admin/AdminHome";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Procuts";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminHome />
    }
])

export default router