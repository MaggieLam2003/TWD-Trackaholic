// import { signInWithGoogle, auth } from '../utils/firebase';
// import { useAuth } from "../auth/AuthUserProvider";
// import { useNavigate } from "react-router-dom"; 

import { useAuth } from "../auth/AuthUserProvider";
import { signIn, signOut } from "../auth/auth";

const LoginForm = () => {
    const { user } = useAuth();
    console.log(user);

    return (
        <div className="login">
          {user ? (
            <div className="logout-button">
                <h1> Goodbye!</h1>
                <p>Come visit us some other time :D</p>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          ) : (
            <div className="login-button">
                <div className="login-desc">
                    
                    <h1>Welcome!</h1>
                    <p>Discover a seamless way to manage your music collection. Whether you're creating 
                        playlists, exploring albums, or tracking your favorite artists, MusicOrganizer 
                        simplifies it all in one convenient place. Sign in to get started and personalize 
                        your music experience!</p>
                </div>
              <button className="signin" onClick={() => signIn()}>
                <div className="text-button">

                    
                  <p>Sign in with Google</p>
                </div>
              </button>
            </div>
          )}
        </div>
        );
};

export default LoginForm;
// const LoginForm = () => {
//     const { user } = useAuth();
//     const navigate = useNavigate();

//     return (
//         <div className="login-page">
//             {user ? (
//                 <div className="welcome-message">
//                     <h1>Welcome, {user.displayName}!</h1>
//                     <p>You are now logged in.</p>
//                 </div>
//             ) : (
//                 <div className="login-form">
//                     <h1>Login</h1>
//                     <button onClick={signInWithGoogle} className="login-button">
//                         Sign in
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LoginForm;




