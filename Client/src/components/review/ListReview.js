﻿import React from 'react'

const ListReview = ({reviews}) => {
  return (
    <div className="container container-fluid">
		<div className="reviews w-75">
            <h5>نظرات دیگران</h5>
            <hr />
                {reviews && reviews.map(review => (
                    <div key={review._id} className="review-card my-3">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{width:`${(review.rating / 5) * 100}%`}}></div>
                        </div>
                        <p className="review_user">توسط {review.name}</p>
                        <p className="review_comment">{review.comment}</p>

                        <hr />
                    </div>
                ))}
                
        </div>
    </div>
  )
}

export default ListReview