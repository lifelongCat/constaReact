import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import DefaultLayout from "./layouts/default/default.tsx";
import Home from "./pages/HomePage/HomePage.tsx";
import ServicesList from "./pages/ServicesListPage/ServicesListPage.tsx";
import Auth from "./pages/AuthPage/AuthPage.tsx";
import ServiceDetail from "./pages/ServiceDetailPage/ServiceDetailPage.tsx";
import Profile from "./pages/ProfilePage/ProfilePage.tsx";
import NotFound from "./pages/NotFoundPage/NotFoundPage.tsx";
import store from "./store/store.tsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.tsx";


const appRouter = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <ProtectedRoute><Home /></ProtectedRoute>
            },
            {
                path: "/login",
                element: <Auth />
            },
            {
                path: "/profile",
                element: <ProtectedRoute><Profile /></ProtectedRoute>
            },
            {
                path: "/services",
                element: <ProtectedRoute><ServicesList /></ProtectedRoute>
            },
            {
                path: "/services/:id",
                element: <ProtectedRoute><ServiceDetail /></ProtectedRoute>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }

]);


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
);
