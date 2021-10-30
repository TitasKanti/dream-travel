import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="text-center p-10">
            <h2 className="text-4xl mb-5 text-red-700">Please Log-In</h2>
            <button className="bg-green-700 px-3 py-2 text-white rounded-md" onClick={handleGoogleLogIn}>Google Log-In</button>
        </div>
    );
};

export default SignIn;