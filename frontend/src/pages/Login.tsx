import { signInWithGoogle, auth } from '../utils/firebase';
import { useAuth } from "../auth/AuthUserProvider";
import { useNavigate } from "react-router-dom"; 

const LoginForm = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="login-page">
            {user ? (
                <div className="welcome-message">
                    <h1>Welcome, {user.displayName}!</h1>
                    <p>You are now logged in.</p>
                </div>
            ) : (
                <div className="login-form">
                    <h1>Login</h1>
                    <button onClick={signInWithGoogle} className="login-button">
                        Sign in
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginForm;