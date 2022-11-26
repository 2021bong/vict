import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import SelectMenu from './components/SelectMenu';
import { selectMenuList } from '../../utils/menuList';

const Main = () => {
  return (
    <Container>
      <Nav />
      <div className='sliderContainer'>
        <FaChevronLeft size='2em' className='chevron' />
        <FaChevronRight size='2em' className='chevron' />
      </div>
      <div className='selectMenuContainer'>
        {selectMenuList.map((el) => (
          <SelectMenu key={el.id} title={el.title} icon={el.icon} />
        ))}
      </div>
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
    margin: 20px auto;
  }
`;
