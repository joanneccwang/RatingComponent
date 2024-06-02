import Title from './Title';
import ThankYouImg from '@/assets/illustration-thank-you.svg';
import '@styles/ThankYou.scss';

function ThankYou({ rating }: { rating: null | number }) {
  return (
    <div>
      <img src={ThankYouImg} alt='Thank You Img' />
      <div className='tag'>You selected {rating} out of 5</div>
      <Title content='Thank you!'></Title>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
