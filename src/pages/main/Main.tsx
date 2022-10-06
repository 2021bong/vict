import Nav from '../../components/Nav';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <Nav />
      <div className='sliderContainer'>
        <AiFillCaretLeft size='5em' color='#B7B7B7' />
        <AiFillCaretRight size='5em' color='#B7B7B7' />
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  .sliderContainer {
    width: 100%;
    display: flex;
    height: 35rem;
    justify-content: space-between;
    align-items: center;
    background-color: #d2d2d2;
  }
`;
