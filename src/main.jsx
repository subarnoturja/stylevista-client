import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AuthProvider from "./authprovider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
