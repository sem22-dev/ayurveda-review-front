"use client"

"use client"

import { useState } from 'react';
import { Star, X, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Home() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [thumbs, setThumbs] = useState('none');

  return (
    <main className="bg-[#e2e1e1] flex justify-center items-center h-screen">
      <div className="bg-white w-full h-screen md:w-[500px] md:h-[600px] p-4">
        <X className="mb-4 cursor-pointer"/>
        <h1 className="text-2xl font-semibold mb-4">
          Leave a review
        </h1>

        <div className='py-8 border-b'>
          <h1 className="text-lg font-medium">
            Safety
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="cursor-pointer fill-current text-yellow-400"
              />
            ))}
          </div>
        </div>

        <div className='py-8 border-b'>
          <h1 className="text-lg font-medium">
            Communication
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`cursor-pointer ${star <= (hoverRating || rating) ? 'fill-current text-yellow-400' : 'fill-current text-gray-400'}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>

        <div className='py-8'>
          <h1 className="text-lg font-medium">
            Would you recommend Ayurveda?
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='flex items-center my-4'>
            <ThumbsDown
              className={`cursor-pointer w-6 h-6 fill-current ${thumbs === 'down' ? 'text-green-500' : 'text-gray-400'}`}
              onClick={() => setThumbs(thumbs === 'down' ? 'none' : 'down')}
              onMouseEnter={() => thumbs !== 'down' && setThumbs('hover-down')}
              onMouseLeave={() => thumbs === 'hover-down' && setThumbs('none')}
            />
            <span className="ml-2 mr-8">No</span>
            <ThumbsUp
              className={`cursor-pointer w-6 h-6 fill-current ${thumbs === 'up' ? 'text-gray-400' : 'text-green-500'}`}
              onClick={() => setThumbs(thumbs === 'up' ? 'none' : 'up')}
              onMouseEnter={() => thumbs !== 'up' && setThumbs('hover-up')}
              onMouseLeave={() => thumbs === 'hover-up' && setThumbs('none')}
            />
            <span className="ml-2">Yes</span>
          </div>
        </div>
      </div>
    </main>
  );
}
