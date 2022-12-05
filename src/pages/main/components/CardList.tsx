import styled from 'styled-components';
import ThumbCard from './ThumbCard';
import MiniCard from './MiniCard';
import { CardListProps, CardListContainerType } from '../../../utils/interface';

const CardList = ({ title, content, type }: CardListProps) => {
  return (
    <Container type={type}>
      <div className='titleContainer'>
        <h2>{title}</h2>
        <span>더보기</span>
      </div>
      {type === 'thumb' && (
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
      )}
      {type === 'mini' && (
        <ul className='miniContainer'>
          {content.map((el, i) => (
            <MiniCard
              key={el.id}
              rank={i + 1}
              id={el.id}
              title={el.title}
              author={el.author}
              score={el.score}
              review={el.review}
            />
          ))}
        </ul>
      )}
    </Container>
  );
};

export default CardList;

const Container = styled.section<CardListContainerType>`
  width: 100%;
  max-width: 1000px;
  margin: 35px auto;
  border-bottom: ${(props) =>
    props.type === 'thumb' ? `1px solid ${props.theme.grey6}` : 'none'};

  &:last-child {
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

  .miniContainer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 475px;
    margin-bottom: 30px;

    .miniCard {
      display: flex;
      align-items: center;
      width: 33%;
      margin-bottom: 5px;

      &:nth-child(3n) {
        margin-bottom: 0;
      }

      .img {
        flex-shrink: 0;
        width: 100px;
        height: 155px;
        background-color: ${({ theme }) => theme.grey6};
        border-radius: 10px;
      }

      .contentContainer {
        padding: 10px 20px;

        .rank {
          margin-bottom: 10px;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .contentBox {
          .title {
            margin-bottom: 7px;
            font-weight: 400;
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
    }
  }
`;
