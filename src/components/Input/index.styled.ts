import { styled } from 'styled-components';

import {
  DESKTOP_BODY_SMALL,
  DESKTOP_HEADING5,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';
export const InputContainer = styled.div`
  position: relative;
  text-align: left;

  svg {
    display: none;
    position: absolute;
    top: 9px;
    right: 30px;
  }
`;

export const StyledInput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid ${COLORS.COLOR_GRAY};
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  outline: none;
  padding-bottom: 5px;

  &:focus {
    & ~ svg {
      display: block;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: ${COLORS.COLOR_ERROR};
  font-size: ${DESKTOP_BODY_SMALL.Size};
  font-weight: ${DESKTOP_BODY_SMALL.Weight};
  line-height: ${DESKTOP_BODY_SMALL.LineHeight};
`;
