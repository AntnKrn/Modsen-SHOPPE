import styled from 'styled-components';

import {
  DESKTOP_HEADING1,
  DESKTOP_HEADING4,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const BodyWrapper = styled.div``;

export const ShopTheLastWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ShopTheLastText = styled.h2`
  font-weight: ${DESKTOP_HEADING1.Weight};
  font-size: ${DESKTOP_HEADING1.Size};
  line-height: ${DESKTOP_HEADING1.LineHeight};
  color: ${COLORS.COLOR_BLACK};
`;

export const ViewAllText = styled.h4`
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
  color: ${COLORS.COLOR_ACCENT};
`;
