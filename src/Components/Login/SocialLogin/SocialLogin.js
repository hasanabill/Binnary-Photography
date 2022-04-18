import React from 'react';
import auth from './../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, gUser, gLoading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading] = useSignInWithFacebook(auth);

    // private route redirect handleing
    let from = location.state?.from?.pathname || "/";
    if (gUser || fbUser) {
        navigate(from, { replace: true });
    }

    // error handling
    let errorElement;
    if (error) {
        errorElement = <p>{error.message}</p>
    }

    // loading time spinner handling
    let loadElement;
    if (gLoading || fbLoading) {
        loadElement = <Loading></Loading>
    }

    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex align-items-center '>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 d-block mx-auto my-3'>
                    <img src='' height="30" className='mx-2' alt="" />
                    Google Sign In
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-dark w-50 d-block mx-auto my-3'>
                    <img src='' height="40" alt="" />
                    FaceBook Sign In
                </button>
            </div>
            {loadElement}
            <p className='text-center text-danger'>{errorElement}</p>
        </div>
    );
};

export default SocialLogin;