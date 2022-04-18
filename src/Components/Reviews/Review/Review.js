import React from 'react';
import './Review.css'

const Review = ({ review }) => {

    const { img, name, comment } = review;

    return (
        <div className='review-card p-3 m-3 d-flex flex-column align-items-center'>
            <div>
                <img className='review-img' src={img} alt="" />
            </div>
            <div>
                <h3 className='text-center py-2'>{name}</h3>
                <p className='text-justify'><i>{comment}</i></p>
            </div>
        </div>
    );
};

export default Review;