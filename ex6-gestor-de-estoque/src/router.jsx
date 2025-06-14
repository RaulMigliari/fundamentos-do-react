import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items/Items";
import RootItems from "./pages/RootItems/RootItems";
import Item from "./pages/Item/Item";
import EditItem from "./pages/EditItem/EditItem";
import CreateItem from "./pages/CreateItem/CreateItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true, 
                element: <Dashboard />
            }, {
                path: "items",
                element: <RootItems />,
                children: [
                    {
                        index: true,
                        element: <Items/>
                    }, {
                        path: ":itemId",
                        element: <Item />
                    }, {
                        path: "edit-item/:itemId",
                        element: <EditItem />
                    }, {
                        path: "create-item",
                        element: <CreateItem />
                    }
                ]
            }
        ]
    }
])

export default router