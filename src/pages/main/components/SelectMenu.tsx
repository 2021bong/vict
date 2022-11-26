import styled from 'styled-components';
import { SelectMenuProps } from '../../../utils/interface';

const SelectMenu = ({ title, icon }: SelectMenuProps) => {
  return (
    <Container>
      <div className='iconContainer'>{icon}</div>
      <span>{title}</span>
    </Container>
  );
};

export default SelectMenu;

const Container = styled.div`
  width: 70px;
  height: 70px;
  font-size: 13px;
  text-align: center;

  .iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    margin-bottom: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.grey1};

    .icon {
      font-size: 1.5rem;
    }
  }
`;
