import { AiFillStar } from 'react-icons/ai';
import { ThumbCardProps } from '../../../utils/interface';

const ThumbCard = ({ title, author, score, review }: ThumbCardProps) => {
  return (
    <div className='cardBox'>
      <div className='img'></div>
      <p className='title'>{title}</p>
      <p className='author'>{author}</p>
      <p className='scoreBox'>
        <span className='highlight'>
          <AiFillStar /> {score}
        </span>
        &nbsp; (
        {review.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')})
      </p>
    </div>
  );
};

export default ThumbCard;
