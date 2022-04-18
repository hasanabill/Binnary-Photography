import React from 'react';
import './Review.css'

const Review = ({ review }) => {

    // destructring props
    const { img, name, comment } = review;

    return (
        <div className='col-12 col-md-4  '>
            <div className='review-card d-flex my-3 p-3 flex-column align-items-center'>
                <div>
                    <img className='review-img' src={img} alt="" />
                </div>
                <div>
                    <h3 className='text-center py-2'>{name}</h3>
                    <p className='text-justify'><i>{comment}</i></p>
                </div>
            </div>
        </div>
    );
};

export default Review;