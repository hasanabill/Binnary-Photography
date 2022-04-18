import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-12 col-md-6 p-5'>
                    <h2 className='mb-3'>Difference between authorization and authentication?</h2>
                    <p> <b>Answer:</b> Authentication is the act of confirming a person's identity, whereas authorisation is the process of confirming a user's access to certain apps, files, and data. Authentication and authorisation serve the same purpose in the digital age. Authentication is a technique for ensuring that people are who they say they are. After this has been verified, authorisation is used to provide the user authority to access various levels of information and execute certain duties, based on the rules defined for various sorts of users.</p>
                </div>
                <div className='col-12 col-md-6 p-5'>
                    <h2 className='mb-3'>What other services does firebase provide other than authentication?</h2>
                    <p><b>Answer:</b>FireBase provides many other services which are given below:</p>
                    <ul>
                        <li>Realtime database</li>
                        <li>Remote Config</li>
                        <li>Firebase Ml</li>
                        <li>Cloud functions</li>
                        <li>Authenticaion</li>
                        <li>Cloud Messaging</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                    </ul>
                </div>
                <div className='col-12 col-md-6 p-5'>
                    <h2 className='mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <div>
                        <p> <b>Answer: </b> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>

                        <p>Firebase Alternatives are:</p>
                        <ul>
                            <li>Auth0</li>
                            <li>MongoDB</li>
                            <li>Okta</li>
                            <li>Keycloak</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;