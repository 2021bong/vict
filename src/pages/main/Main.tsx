import styled from 'styled-components';
import SelectMenu from './components/SelectMenu';
import BandAd from './components/BandAd';
import { selectMenuList } from '../../utils/menuList';
import { contentList } from '../../utils/contentList';
import { rankList } from '../../utils/rankList';
import CardList from './components/CardList';
import Slide from './components/Slide';

const Main = () => {
  return (
    <Container>
      <Slide />
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
  .selectMenuContainer {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px auto;
  }
`;
