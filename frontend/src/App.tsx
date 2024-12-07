import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import RootLayout from "./layouts/RootLayout";
import { PATHS } from "./constants/Navigation";
import AuthUserProvider from "./auth/AuthUserProvider";
// import "./index.css";
import "./App.css";

// import HomePage from "./pages/Home";
// import AuthUserProvider from "./auth/AuthUserProvider";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            ...PATHS.map((item) => ({
                path: item.link,
                element: item.element,
            })),
        ],
    },
]);

function App() {
    return (
        <AuthUserProvider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <RouterProvider router={router} />
            </MantineProvider>
        </AuthUserProvider>
    );
}


export default App;