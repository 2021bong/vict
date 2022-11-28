import styled from 'styled-components';
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <Container>
      <div className='contentContainer'>
        <div className='titleContainer'>
          <h2 className='companyName'>
            VICT <span>(주)VICT</span>
          </h2>
          <ul className='snsContainer'>
            <li>
              <BsInstagram size='1.3rem' />
            </li>
            <li>
              <BsFacebook size='1.3rem' />
            </li>
            <li>
              <BsTwitter size='1.3rem' />
            </li>
            <li>
              <BsYoutube size='1.3rem' />
            </li>
          </ul>
        </div>
        <ul className='companyInfoContainer'>
          <div>
            <li className='first'>대표자 : 봉원희</li>
            <li>사업자 등록번호 : 1234567890</li>
            <li>통신판매업 신고번호 : 제 1234567890호</li>
          </div>
          <div>
            <li className='first'>
              주소 : 서울시 강남구 역삼동 1234 VICT 빌딩 8층
            </li>
            <li>대표전화 : 1234-5678</li>
            <li>이메일 : help@vict.com</li>
          </div>
        </ul>
        <ul className='menuContainer'>
          <li>회사소개</li>
          <li>사업자정보확인</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>청소년보호정책</li>
          <li>고객지원</li>
          <li>공지사항</li>
          <li>기타 문의</li>
        </ul>
        <p>ⓒ 2022 VICT Corp. Ltd. All rights reserved</p>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  padding: 50px;
  background-color: ${({ theme }) => theme.footerBg};

  .contentContainer {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    color: ${({ theme }) => theme.text};
    font-size: 13px;

    .titleContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .companyName {
        margin-bottom: 20px;
        font-size: 30px;

        span {
          font-size: 20px;
        }
      }

      .snsContainer {
        display: flex;
        justify-content: space-between;
        width: 15%;
        margin-bottom: 20px;
      }
    }
    .companyInfoContainer {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid ${({ theme }) => theme.grey7};

      div {
        display: flex;
        justify-content: flex-start;

        &:first-child {
          margin-bottom: 5px;
        }

        li {
          padding: 0 15px;
          border-right: 1px solid ${({ theme }) => theme.grey7};

          &:nth-of-type(3n) {
            border-right: 0;
          }
        }

        .first {
          padding-left: 0;
          padding-right: 15px;
        }
      }
    }

    .menuContainer {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
`;
