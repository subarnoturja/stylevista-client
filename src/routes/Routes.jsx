import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";


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
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact-us",
                element: <Contact></Contact>,
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