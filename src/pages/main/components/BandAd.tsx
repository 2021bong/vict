import styled from 'styled-components';
import { BandAdProps, StyledBandAdProps } from '../../../utils/interface';

const BandAd = ({ text, color }: BandAdProps) => {
  return (
    <Container bgColor={color}>
      <b>{text}</b>
    </Container>
  );
};

export default BandAd;

const Container = styled.div<StyledBandAdProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 50px;
  margin: 0 auto;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
`;
