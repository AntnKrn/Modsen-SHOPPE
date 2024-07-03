import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_BODY_LARGE,
  DESKTOP_HEADING1,
  DESKTOP_HEADING3,
  MOBILE_BODY_SMALL,
  MOBILE_HEADING1,
} from '../../constants/styles/fonts';

export const ContainerContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 561px;
  height: 134px;
  margin: 0 auto;

  @media (${resolution.desktop}) {
    height: initial;
    margin: 0 0 69px;
  }
`;

export const Title = styled.h1`
  font-size: ${DESKTOP_HEADING1.Size};
  font-weight: ${DESKTOP_HEADING1.Weight};
  line-height: ${DESKTOP_HEADING1.LineHeight};

  @media (${resolution.desktop}) {
    text-align: left;
    font-size: ${MOBILE_HEADING1.Size};
    font-weight: ${MOBILE_HEADING1.Weight};
    line-height: ${MOBILE_HEADING1.LineHeight};
  }
`;

export const Description = styled.h3`
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};

  @media (${resolution.desktop}) {
    display: none;
  }
`;

export const SendButton = styled.input`
  background-color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 4px;
  width: 500px;
  height: 51px;
  color: var(--bg-color);
  font-size: ${DESKTOP_BODY_LARGE.Size};
  font-weight: ${DESKTOP_BODY_LARGE.Weight};
  line-height: ${DESKTOP_BODY_LARGE.LineHeight};
  cursor: pointer;
  transition: 1s;

  &:active,
  &:hover {
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  @media (${resolution.desktop}) {
    width: 288px;
    height: 32px;
    margin-top: 28px;
    font-size: ${MOBILE_BODY_SMALL.Size};
    font-weight: ${MOBILE_BODY_SMALL.Weight};
    line-height: ${MOBILE_BODY_SMALL.LineHeight};
  }
`;
