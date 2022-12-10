import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [menu, setMenu] = useState([
    { id: 1, content: '로고', selected: false },
    { id: 2, content: '랭킹', selected: false },
    { id: 3, content: '추천', selected: false },
    { id: 4, content: '웹툰', selected: false },
    { id: 5, content: '소설', selected: false },
    { id: 6, content: '에세이', selected: false },
    { id: 7, content: '이벤트', selected: false },
  ]);
  return (
    <StyledNav>
      <div className='container'>
        <ul className='menu-container'>
          {menu.map((m) => (
            <li key={m.id} className='page'>
              {m.content}
            </li>
          ))}
        </ul>
        <ul className='info-container'>
          <Link to='/login'>
            <li className='page'>로그인</li>
          </Link>
          <Link to='/signup'>
            <li className='page'>회원가입</li>
          </Link>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 3.5rem;
  background: linear-gradient(to right, #e439f0, #4331e0);

  .container {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;
    font-size: 14px;

    .menu-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 40%;
      font-weight: 600;
    }

    .info-container {
      display: flex;
      width: 10%;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
    }

    .page {
      color: #fff;

      &:active {
        color: #999;
      }
    }
  }
`;
