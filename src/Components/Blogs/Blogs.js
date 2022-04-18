import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{ height: '500px' }}>
            <div className='row my-5'>
                <div className='col-12 col-md-6 p-5'>
                    <h2>Difference between authorization and authentication?</h2>
                    <p>Authentication is the act of confirming a person's identity, whereas authorisation is the process of confirming a user's access to certain apps, files, and data. Authentication and authorisation serve the same purpose in the digital age. Authentication is a technique for ensuring that people are who they say they are. After this has been verified, authorisation is used to provide the user authority to access various levels of information and execute certain duties, based on the rules defined for various sorts of users.</p>
                </div>
                <div className='col-12 col-md-6 p-5'>
                    <h2>What other services does firebase provide other than authentication?</h2>
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
            </div>
        </div>
    );
};

export default Blogs;