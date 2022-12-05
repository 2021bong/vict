import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import SelectMenu from './components/SelectMenu';
import BandAd from './components/BandAd';
import { selectMenuList } from '../../utils/menuList';
import { contentList } from '../../utils/contentList';
import { rankList } from '../../utils/rankList';
import CardList from './components/CardList';

const Main = () => {
  return (
    <Container>
      <div className='sliderContainer'>
        <FaChevronLeft size='2em' className='chevron' />
        <FaChevronRight size='2em' className='chevron' />
      </div>
      <ul className='selectMenuContainer'>
        {selectMenuList.map((el) => (
          <SelectMenu key={el.id} title={el.title} icon={el.icon} />
        ))}
      </ul>
      <BandAd
        text='<돈만 주시면 시키시는 거 다 합니다> 출판 기념 EVENT!'
        color='#F2C303'
      />
      <CardList title='베스트' content={rankList} type='mini' />
      <BandAd
        text={`'차갑지만 내 여자에겐 따뜻하겠지...' 북부 공작을 좋아하는 사람들을 위한 기획전`}
        color='#fc8b9a'
      />
      {contentList.map((el) => (
        <CardList
          key={el.id}
          title={el.containerTitle}
          content={el.content}
          type='thumb'
        />
      ))}
    </Container>
  );
};

export default Main;

const Container = styled.div`
  .sliderContainer {
    width: 100%;
    max-width: 1000px;
    height: 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.grey4};

    .chevron {
      color: ${({ theme }) => theme.grey6};

      &:first-of-type {
        margin-left: 10px;
      }

      &:last-of-type {
        margin-right: 10px;
      }
    }
  }

  .selectMenuContainer {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px auto;
  }
`;
