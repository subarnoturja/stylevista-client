import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/registration',
                element: <Registration></Registration>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            }
        ]
    }
])