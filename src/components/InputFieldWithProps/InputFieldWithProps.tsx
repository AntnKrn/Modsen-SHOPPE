import { styled } from 'styled-components';
import { COLORS } from '../../constants/styles/mainColors';
import { DESKTOP_HEADING5 } from '../../constants/styles/fonts';
import { Field } from 'formik';

export const StyledField = styled(Field)<{ $Color: string }>`
  font-weight: bold;
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
  &:focus {
    outline: none;
  }
`;
