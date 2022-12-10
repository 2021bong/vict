import styled from 'styled-components';

const Login = () => (
  <Container>
    <h3 className='title'>로고</h3>

    <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
      <input type='text' id='id' className='inputBox' placeholder='아이디' />
      <input type='password' className='inputBox' placeholder='비밀번호' />
      <div className='checkbox'>
        <input type='checkbox' id='checkbox' />
        <label htmlFor='checkbox'>로그인 유지</label>
      </div>
      <div className='findBox'>
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
      </div>
      <button className='btn login'>로그인</button>
      <p className='signupText'>아직 VICT 회원이 아니신가요?</p>
      <button className='btn signup'>회원가입</button>
    </form>
  </Container>
);

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  padding: 50px;

  .title {
    margin-bottom: 50px;
    text-align: center;
    font-size: 3rem;
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;

    .inputBox {
      width: 100%;
      margin-bottom: 20px;
      padding: 5px;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.grey4};
      font-size: 1rem;
      transition: 0.2s ease-in;

      &:last-of-type {
        margin-bottom: 30px;
      }

      &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.mainBlue};
      }
    }

    .checkbox {
      width: 100%;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.text};

      input {
        margin-right: 5px;
        cursor: pointer;
      }

      label {
        cursor: pointer;
      }
    }

    .findBox {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 10px;
      padding: 0 5px;
      color: ${({ theme }) => theme.text};

      span:hover {
        color: ${({ theme }) => theme.grey7};
        font-weight: 500;
        cursor: pointer;
      }
    }

    .btn {
      width: 100%;
      margin-bottom: 40px;
      padding: 10px;
      border-radius: 10px;
      border: none;
      color: #fff;
    }

    .login {
      background: ${({ theme }) => theme.mainGradient};

      &:active {
        background: none;
        background-color: ${({ theme }) => theme.mainBlue};
      }
    }

    .signupText {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.text};
      text-align: center;
    }

    .signup {
      background-color: ${({ theme }) => theme.text};

      &:hover {
        background: ${({ theme }) => theme.mainGradient};
      }

      &:active {
        background: none;
        background-color: ${({ theme }) => theme.mainBlue};
      }
    }
  }
`;
