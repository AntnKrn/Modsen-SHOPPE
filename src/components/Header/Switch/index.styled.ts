import { styled } from 'styled-components';

import { COLORS } from '../../../constants/styles/mainColors';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 45px;
  height: 21px;
  background: #78788029;
  border: 0.5px solid #0000000a;
  border-radius: 99px;
  transition: 0.4s;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);

  &:before {
    position: absolute;
    top: 0.5px;
    left: 1px;
    width: 20px;
    height: 18px;
    border-radius: 99px;
    background: ${COLORS.COLOR_WHITE};
    transform: translate(0, 0.5px);
    transition: 0.4s;
    content: '';
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: #78788029;

    &:before {
      background: ${COLORS.COLOR_BLACK};
      transform: translate(20px, 0.5px);
    }
  }
`;
