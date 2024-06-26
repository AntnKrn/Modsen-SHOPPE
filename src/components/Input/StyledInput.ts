import { styled } from 'styled-components';
import { DESKTOP_HEADING5 } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const StyledInput = styled.input<{
  $Color: string;
}>`
  width: auto;
  border: none;
  border-radius: 0px;
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
  &:focus {
    outline: none;
  }
`;
