import styled from 'styled-components';
import {
  DESKTOP_BODY_LARGE,
  DESKTOP_HEADING1,
  DESKTOP_HEADING3,
} from '../../constants/styles/fonts';

export const ErrorWrapper = styled.section`
  width: 436px;
  height: 247px;
  margin: auto auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ErrorText = styled.h2`
  font-size: ${DESKTOP_HEADING1.Size};
  font-weight: ${DESKTOP_HEADING1.Weight};
  line-height: ${DESKTOP_HEADING1.LineHeight};
  color: var(--tx-color);
`;
export const ErrorDescription = styled.span`
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};
  color: rgba(112, 112, 112, 1);
`;

export const HomeButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 1);
  width: 187px;
  height: 53px;
  font-size: ${DESKTOP_BODY_LARGE.Size};
  font-weight: ${DESKTOP_BODY_LARGE.Weight};
  line-height: ${DESKTOP_BODY_LARGE.LineHeight};
  color: var(--tx-color);
  cursor: pointer;
`;
