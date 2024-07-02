import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_BODY_LARGE,
  DESKTOP_HEADING1,
  DESKTOP_HEADING3,
  MOBILE_BODY_SMALL,
  MOBILE_HEADING1,
} from '../../constants/styles/fonts';

export const ErrorWrapper = styled.section`
  width: 436px;
  height: 247px;
  margin: auto auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${resolution.laptop}) {
    width: 163px;
    height: 136px;
    span,
    button {
      font-size: ${MOBILE_BODY_SMALL.Size};
      font-weight: ${MOBILE_BODY_SMALL.Weight};
      line-height: ${MOBILE_BODY_SMALL.LineHeight};
    }
    h2 {
      font-size: ${MOBILE_HEADING1.Size};
      font-weight: ${MOBILE_HEADING1.Weight};
      line-height: ${MOBILE_HEADING1.LineHeight};
    }
  }
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
  border-radius: 4px;
  width: 187px;
  height: 53px;
  font-size: ${DESKTOP_BODY_LARGE.Size};
  font-weight: ${DESKTOP_BODY_LARGE.Weight};
  line-height: ${DESKTOP_BODY_LARGE.LineHeight};
  color: var(--tx-color);
  cursor: pointer;

  @media (${resolution.laptop}) {
    width: 115px;
    height: 32px;
  }
`;
