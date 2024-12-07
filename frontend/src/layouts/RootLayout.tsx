import { HeaderSimple } from "../components/Header";
import { PATHS, USERPATHS } from "../constants/Navigation";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthUserProvider";


const RootLayout = () => {
    const { user } = useAuth();

    return (
        <div>
            {/* <HeaderSimple links={PATHS} /> */}
            <HeaderSimple links={user ? USERPATHS : PATHS} />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
