import styled from 'styled-components';
import { DESKTOP_HEADING5 } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const StyledInput = styled.input<{
  $Color: string;
}>`
  width: 100%;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${(props) =>
    props.$Color === 'gray'
      ? ` ${COLORS.COLOR_GRAY}`
      : ` ${COLORS.COLOR_BLACK}`};
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  padding-bottom: 11px;
  box-shadow: 'none';
  &:focus {
    outline: none;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 39px;
  position: relative;

  div {
    position: absolute;
    right: 0;
  }
`;
