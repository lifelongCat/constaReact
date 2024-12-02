import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/default/default.tsx";
import Home from "./pages/HomePage/HomePage.tsx";
import ServicesList from "./pages/ServicesListPage/ServicesListPage.tsx";
import Auth from "./pages/AuthPage/AuthPage.tsx";
import ServiceDetail from "./pages/ServiceDetailPage/ServiceDetailPage.tsx";
import Profile from "./pages/ProfilePage/ProfilePage.tsx";
import NotFound from "./pages/NotFoundPage/NotFoundPage.tsx";


const appRouter = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Auth />
            },
            {
                path: "/user/:id",
                element: <Profile />
            },
            {
                path: "/services",
                element: <ServicesList />
            },
            {
                path: "/services/:id",
                element: <ServiceDetail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }

]);


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={appRouter} />
);
