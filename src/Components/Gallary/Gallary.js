import React from 'react';
import PhotoAlbum from 'react-photo-album';
import { photos } from './Photos';

const Gallary = () => {
    return (
        <div>
            <h1 className='text-center'>Gallary</h1>
            <PhotoAlbum layout='rows' photos={photos}></PhotoAlbum>
        </div>
    );
};

export default Gallary;