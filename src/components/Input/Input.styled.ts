import { styled } from 'styled-components';
import {
  DESKTOP_BODY_SMALL,
  DESKTOP_HEADING5,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const IconWrapper = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 0px;
  bottom: 5px;
`;

export const StyledInput = styled.input<{
  $Color: string;
}>`
  width: auto;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${(props) =>
    props.$Color === 'gray'
      ? ` ${COLORS.COLOR_GRAY}`
      : ` ${COLORS.COLOR_BLACK}`};
  flex-grow: 2;
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  padding-bottom: 5px;
  box-shadow: 'none';
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -29px;
  align-self: flex-start;
  color: ${COLORS.COLOR_ERROR};
  font-size: ${DESKTOP_BODY_SMALL.Size};
  font-weight: ${DESKTOP_BODY_SMALL.Weight};
  line-height: ${DESKTOP_BODY_SMALL.LineHeight};
`;
