import { AiFillStar } from 'react-icons/ai';
import { MiniCardProps } from '../../../utils/interface';

const MiniCard = ({
  id,
  rank,
  title,
  author,
  score,
  review,
}: MiniCardProps) => {
  return (
    <li className='miniCard'>
      <img className='img' />
      <div className='contentContainer'>
        <p className='rank'>{rank}</p>
        <div className='contentBox'>
          <h5 className='title'>{title}</h5>
          <p className='author'>{author}</p>
          <div className='scoreBox'>
            <span className='highlight'>
              <AiFillStar /> {score}
            </span>
            &nbsp; (
            {review.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')})
          </div>
        </div>
      </div>
    </li>
  );
};

export default MiniCard;
