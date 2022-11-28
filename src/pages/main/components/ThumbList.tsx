import styled from 'styled-components';
import ThumbCard from './ThumbCard';
import { ThumbListProps } from '../../../utils/interface';

const ThumbList = ({ title, content }: ThumbListProps) => {
  return (
    <Container>
      <div className='titleContainer'>
        <h2>{title}</h2>
        <span>더보기</span>
      </div>
      <ul className='cardContainer'>
        {content.map((el) => (
          <ThumbCard
            key={el.id}
            id={el.id}
            title={el.title}
            author={el.author}
            score={el.score}
            review={el.review}
          />
        ))}
      </ul>
    </Container>
  );
};

export default ThumbList;

const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  border-bottom: 1px solid ${({ theme }) => theme.grey6};

  &:nth-of-type(3n) {
    border-bottom: 0;
  }

  .titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    span {
      color: ${({ theme }) => theme.grey6};
      font-size: 13px;

      &:hover,
      :active {
        color: ${({ theme }) => theme.text};
      }
    }

    h2 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  }

  .cardContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .cardBox {
      width: 180px;
      margin-right: 10px;
      font-size: 14px;

      .img {
        height: 200px;
        margin-bottom: 10px;
        background-color: ${({ theme }) => theme.grey6};
        border-radius: 10px;
      }

      .title {
        font-size: 16px;
        line-height: 1.3rem;
        margin-bottom: 10px;
      }

      .author {
        margin-bottom: 5px;
        color: ${({ theme }) => theme.text};
      }

      .scoreBox {
        color: ${({ theme }) => theme.text};

        .highlight {
          color: ${({ theme }) => theme.mainPurple};
        }
      }
    }
  }
`;
