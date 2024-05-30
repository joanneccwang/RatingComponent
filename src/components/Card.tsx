import { useState } from 'react';

import '@/styles/Card.scss';

import Rating from '@components/Rating';
import ThankYou from '@components/ThankYou';

function Card() {
  const [isRated] = useState(false); // setIsRated
  return (
    <div className='card'>
      {isRated ? <ThankYou></ThankYou> : <Rating></Rating>}
    </div>
  );
}

export default Card;
