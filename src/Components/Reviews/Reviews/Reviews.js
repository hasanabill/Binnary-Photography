import React from 'react';
import img1 from '../../../images/Review/review-1.jpg'
import img2 from '../../../images/Review/review-2.jpg'
import img3 from '../../../images/Review/review-3.jpg'
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = [
        {
            id: '1adf43qyf98fs',
            img: img1,
            name: 'Will Smith',
            comment: 'He is a wonderful man and truly a professional in his field. He was instantly able to put my family at ease, and capture some captivating photographs. I will treasure them forever. I simply cannot recommend him enough!'
        },
        {
            id: '2fahe8iu32rdf',
            img: img2,
            name: 'Chris Rock',
            comment: 'He is the absolute BEST! I have had the pleasure of working with her twice and would recommend her to anyone. She captured so many beautiful memories of my boys that I will be able to cherish for the rest of my life. Thank you, thank you, thank you!'
        },
        {
            id: '3y4qh87fhfqd3',
            img: img3,
            name: 'Jada Smith',
            comment: "He creates magic. She has captured the most special moments of my family's life. I would never hesitate to recommend her to anyone who wants a true professional to create a customized photography experience."
        }
    ];


    return (
        <div className='container my-5'>
            <h1 className='text-center my-3'>Reviews</h1>
            <div className='row '>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;