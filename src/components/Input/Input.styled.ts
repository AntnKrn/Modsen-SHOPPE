import { styled } from 'styled-components';
import { DESKTOP_HEADING5 } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';
export const SubscribeEmailForm = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const InputForSubscribeEmail = styled.input<{
  $Width: string;
  $Color: string;
}>`
  width: ${(props) => props.$Width}px;
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
