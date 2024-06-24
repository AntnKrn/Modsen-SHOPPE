import styled from 'styled-components';

import { DESKTOP_HEADING4 } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const BodyWrapper = styled.main``;

export const ImgWrapper = styled.div`
  height: 646px;
  margin: 0 auto;
  position: relative;
`;

export const ShopTheLastTextWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ViewAllText = styled.h4`
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
  color: ${COLORS.COLOR_ACCENT};
`;
