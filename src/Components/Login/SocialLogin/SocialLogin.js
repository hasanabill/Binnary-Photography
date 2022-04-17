import React from 'react';

const SocialLogin = () => {
    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex align-items-center '>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>
            <div className=''>
                <button className='btn btn-dark w-50 d-block mx-auto my-3'>
                    <img src='' height="30" className='mx-2' alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-dark w-50 d-block mx-auto my-3'>
                    <img src='' height="40" alt="" />
                    FaceBook Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;