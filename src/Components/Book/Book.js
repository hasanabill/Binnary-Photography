import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import './Book.css'
import { Button, Form } from 'react-bootstrap';

const Book = () => {

    const [user] = useAuthState(auth)
    if (user) {
        console.log(user)
    }

    return (
        <div className='container' style={{ height: '600px' }}>

            <h1 className=' text-center text-danger'>Get in Touch</h1>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" value={user?.displayName} readOnly placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={user?.email} readOnly placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write Details</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Book
                </Button>
            </Form>


        </div >
    );
};

export default Book;