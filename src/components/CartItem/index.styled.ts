import styled from 'styled-components';
import { COLORS } from '../../constants/styles/mainColors';
import { DESKTOP_BODY_MEDIUM } from '../../constants/styles/fonts';

export const CartItemWrapper = styled.div`
  height: 175px;
  border-bottom: 0.1px solid ${COLORS.COLOR_GRAY};
  transition: 1s;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.COLOR_GRAY};
  }
`;

export const CartItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const CartImage = styled.div`
  width: 200px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CartDescription = styled.div`
  width: 100%;
  position: relative;
  margin: 0 15px;

  p {
    font-size: ${DESKTOP_BODY_MEDIUM.Size};
    font-weight: ${DESKTOP_BODY_MEDIUM.Weight};
    line-height: ${DESKTOP_BODY_MEDIUM.LineHeight};
  }
  p:nth-child(2) {
    margin-top: 10px;
    color: ${COLORS.COLOR_ACCENT};
  }

  p:nth-child(4) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const QunatityWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
`;
