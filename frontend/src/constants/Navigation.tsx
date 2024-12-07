import Profile from "../pages/Profile";
import Album from "../pages/Album";
import HomePage from "../pages/Home";
import LoginForm from "../pages/Login";

/**
 * TODO: Modify this constant to point to the URL of your backend.
 * It should be of the format "https://<app-name>.fly.dev/api"
 *
 * Most of the time, the name of your app is the name of the folder you're in
 * right now, and the name of your Git repository.
 * For instance, if that name is "my-app", then you should set this to:
 * "https://my-app.fly.dev/api"
 *
 * If you've already deployed your app (using `fly launch` or `fly deploy`),
 * you can find the name by running `flyctl status`, under App > Name.
 */
export const BACKEND_BASE_PATH = 'https://maggie.fly.dev/api';

// https://fly.io/apps/maggie
// maggie.fly.dev



export const PATHS: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    {
        link: "/",
        label: "Home",
        element: <HomePage />,
    },
    {
        link: "/album",
        label: "Album",
        element: <Album />,
    },
    {
        link: "/profile",
        label: "Profile",
        element: <Profile />,
    },
    {
        link: "/login",
        label: "Login",
        element: <LoginForm />,
    },
];


export const USERPATHS: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    {
        link: "/",
        label: "Home",
        element: <HomePage />,
    },
    {
        link: "/album",
        label: "Album",
        element: <Album />,
    },
    {
        link: "/profile",
        label: "Profile",
        element: <Profile />,
    },
    {
        link: "/login",
        label: "Log Out",
        element: <LoginForm />,
    },
];