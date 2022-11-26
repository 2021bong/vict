import Nav from '../../components/Nav';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <Nav />
      <div className='sliderContainer'>
        <FaChevronLeft size='2em' color='#B7B7B7' className='chevron' />
        <FaChevronRight size='2em' color='#B7B7B7' className='chevron' />
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
    background-color: #d2d2d2;

    .chevron {
      &:first-of-type {
        margin-left: 10px;
      }

      &:last-of-type {
        margin-right: 10px;
      }
    }
  }
`;
