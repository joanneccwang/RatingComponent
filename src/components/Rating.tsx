import { useState } from 'react';
import classname from 'classnames';

import '@/styles/Rating.scss';

import Title from '@components/Title';
import StarIcon from '@/assets/icon-star.svg';

const TopIcon = () => {
  return (
    <div className='icon'>
      <img src={StarIcon}></img>
    </div>
  );
};

const RatingButton = ({
  rating,
  onSetRating,
}: {
  rating: number | null;
  onSetRating: (rating: number) => void;
}) => {
  const ratingButtons = [1, 2, 3, 4, 5];
  return (
    <div className='rating-button-wrapper'>
      {ratingButtons.map((rate) => (
        <div
          key={rate}
          className={classname('rating-button', {
            active: rate === rating,
          })}
          onClick={() => onSetRating(rate)}
        >
          <div>{rate}</div>
        </div>
      ))}
    </div>
  );
};

function Rating() {
  const [rating, setRating] = useState<null | number>(null);

  const handleSetRating = (rating: number) => {
    console.log('handled?');
    setRating(rating);
  };
  return (
    <div className='rating'>
      <TopIcon />
      <Title content='How did we do?'></Title>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingButton rating={rating} onSetRating={handleSetRating} />
    </div>
  );
}

export default Rating;
