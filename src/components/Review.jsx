import React, { useState } from 'react';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview && rating) {
      const review = {
        text: newReview,
        rating,
        id: Date.now(),
      };
      setReviews([...reviews, review]);
      setNewReview('');
      setRating(0);
    }
  };

  return (
    <div className='bg-slate-400 p-40'>
       <div className="max-w-4xl h-[1020] mx-auto p-16 bg-gray-100 rounded-lg shadow-lg mt-3">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Rating:</label>
          <select 
            value={rating} 
            onChange={handleRatingChange} 
            className="mt-1 p-2 w-full border rounded-md bg-white shadow-sm"
          >
            <option value={0}>Select...</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 && 's'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Review:</label>
          <textarea
            value={newReview}
            onChange={handleReviewChange}
            placeholder="Write your review here"
            className="mt-1 p-2 w-full border rounded-md shadow-sm resize-none h-24"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Review
        </button>
      </form>
      <div className="mt-6">
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 bg-white rounded-md shadow">
                <p className="text-yellow-500 font-bold">Rating: {review.rating} Star{review.rating > 1 && 's'}</p>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        )}
      </div>
    </div>
    </div>
   
  );
}

export default Review;
