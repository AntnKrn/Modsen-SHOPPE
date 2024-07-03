import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_HEADING4,
  MOBILE_HEADING3,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const BodyWrapper = styled.main``;

export const ImgWrapper = styled.div`
  position: relative;
  height: 646px;

  @media (${resolution.laptop}) {
    height: 354px;
  }
`;

export const ShopTheLastTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
`;

export const ViewAllText = styled.h4`
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
  color: ${COLORS.COLOR_ACCENT};

  @media (${resolution.laptop}) {
    font-size: ${MOBILE_HEADING3.Size};
    font-weight: ${MOBILE_HEADING3.Weight};
    line-height: ${MOBILE_HEADING3.LineHeight};
  }
`;
