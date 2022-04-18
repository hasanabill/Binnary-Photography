import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './../../../firebase.init';

const Register = () => {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let errorElement;
    if (error) {
        errorElement = <>{error.message}</>
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='mt-5'>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p>Already have an account? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
                <p className='text-center text-danger'>{errorElement}</p>

                <Button onClick={handleRegister} className='w-50 d-block mx-auto' variant="dark" type="submit">
                    Register
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;