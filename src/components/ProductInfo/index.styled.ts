import styled from 'styled-components';
import {
  DESKTOP_HEADING2,
  DESKTOP_HEADING4,
  DESKTOP_HEADING5,
  MOBILE_HEADING1,
  MOBILE_HEADING2,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';
import { resolution } from '../../constants/resolutions';

export const ProductInfoText = styled.div`
  margin-left: 62px;
  width: 100%;
  height: inherit;
  position: relative;
`;

export const ProductRating = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ViewMore = styled.p`
  display: none;
  text-align: left;
  margin-top: 6px;
  color: ${COLORS.COLOR_ACCENT};
  font-weight: ${MOBILE_HEADING2.Weight};
  font-size: ${MOBILE_HEADING2.Size};
  line-height: ${MOBILE_HEADING2.LineHeight};
  cursor: pointer;

  @media (${resolution.laptop}) {
    display: block;
  }
`;

export const ProductTextInfo = styled.h6`
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  display: inline-block;
  color: rgba(112, 112, 112, 1);
  span {
    display: none;
  }

  @media (${resolution.laptop}) {
    text-align: left;
    margin-top: 24px;
    font-weight: ${MOBILE_HEADING2.Weight};
    font-size: ${MOBILE_HEADING2.Size};
    line-height: ${MOBILE_HEADING2.LineHeight};
  }
`;

export const ProductInfoIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const ProductName = styled.h1`
  font-weight: ${DESKTOP_HEADING2.Weight};
  font-size: ${DESKTOP_HEADING2.Size};
  line-height: ${DESKTOP_HEADING2.LineHeight};

  @media (${resolution.laptop}) {
    text-align: left;
    font-weight: ${MOBILE_HEADING1.Weight};
    font-size: ${MOBILE_HEADING1.Size};
    line-height: ${MOBILE_HEADING1.LineHeight};
  }
`;

export const ProductPrice = styled.h4`
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
  color: ${COLORS.COLOR_ACCENT};
  margin-top: 25px;

  @media (${resolution.laptop}) {
    font-size: ${MOBILE_HEADING2.Size};
    font-weight: ${MOBILE_HEADING2.Weight};
    line-height: ${MOBILE_HEADING2.LineHeight};
    margin-top: 5px;
  }
`;

export const DesktopProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  @media (${resolution.laptop}) {
    display: none;
  }
`;

export const MobileProductInfo = styled.div`
  display: none;

  @media (${resolution.laptop}) {
    display: block;
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
