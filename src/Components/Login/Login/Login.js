import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div>
            <Form className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <p>New here? <Link className='text-decoration-none' to='/register'>Create New Account</Link></p>

                <Button className='w-50 d-block mx-auto' variant="dark" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;