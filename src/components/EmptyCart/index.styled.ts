import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import {
  DESKTOP_HEADING1,
  DESKTOP_HEADING3,
} from '../../constants/styles/fonts';

export const EmptyCartWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const EmptyCartText = styled.h1`
  font-size: ${DESKTOP_HEADING1.Size};
  font-weight: ${DESKTOP_HEADING1.Weight};
  line-height: ${DESKTOP_HEADING1.LineHeight};
`;

export const GoShopButton = styled(Link)`
  display: inline-block;
  margin-top: 150px;
  background-color: var(--bg-color);
  border: 1px solid var(--text-color);
  border-radius: 4px;
  color: var(--text-color);
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};
  transition: 1s;

  &:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
  }
`;
