import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='bg-dark py-3 mt-5'>
            <div className='d-flex justify-content-center mb-4'>
                <div className=' px-2'>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="3" roundness="50%" url="https://www.facebook.com" size="40" />
                </div>

                <div className=' px-2'>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="inset" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                </div>

                <div className=' px-2'>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="inset" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(201,78,114,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                </div>

                <div className=' px-2'>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="inset" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(63,116,207,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                </div>

            </div>
            <p className='text-white text-center'>Copyright © {year}</p>
        </div>
    );
};

export default Footer;