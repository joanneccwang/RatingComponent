import { useState } from 'react';

import '@/styles/Card.scss';

import Rating from '@components/Rating';
import ThankYou from '@components/ThankYou';

function Card() {
  const [isRated, setIsRated] = useState(false); // setIsRated
  const [finalRating, setFinalRating] = useState<null | number>(null);
  const handleSubmitRating = (rating: null | number) => {
    if (rating === null) return;
    setIsRated(true);
    setFinalRating(rating);
  };
  return (
    <div className='card'>
      {isRated ? (
        <ThankYou rating={finalRating}></ThankYou>
      ) : (
        <Rating onSubmitRating={handleSubmitRating}></Rating>
      )}
    </div>
  );
}

export default Card;
