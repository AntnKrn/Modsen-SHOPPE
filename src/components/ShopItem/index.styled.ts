import styled from 'styled-components';

import {
  DESKTOP_HEADING3,
  DESKTOP_HEADING4,
  MOBILE_BODY_SMALL,
  MOBILE_HEADING3,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const ShopItemWrapper = styled.div`
  width: 377px;
  height: 472px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    width: 136px;
    height: 188px;
  }
`;

export const ShopItemImg = styled.img`
  display: block;
  border-radius: 8px;
  width: 100%;
  object-fit: contain;
  height: 380px;
  transition: opacity 0.5s ease-in-out;
  -webkit-transition: opacity 0.5s ease-in-out;
  opacity: 1;

  @media (max-width: 768px) {
    width: 136px;
    height: 136px;
  }
`;

export const ShopItemContainer = styled.div`
  position: relative;
  &:hover {
    img {
      opacity: 0.6;
    }
    div {
      display: flex;
    }
  }
`;

export const ShopItemIconsContainer = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  justify-content: center;
  align-items: center;
  gap: 16px;

  a {
    width: 21px;
    height: 21px;
  }
  svg {
    width: 21px;
    height: 21px;
  }
`;
export const ProductName = styled.h3`
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: ${MOBILE_HEADING3.Size};
    font-weight: ${MOBILE_HEADING3.Weight};
    line-height: ${MOBILE_HEADING3.LineHeight};
  }
`;

export const ProductCost = styled.span`
  color: ${COLORS.COLOR_ACCENT};
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};

  @media (max-width: 768px) {
    font-size: ${MOBILE_BODY_SMALL.Size};
    font-weight: ${MOBILE_BODY_SMALL.Weight};
    line-height: ${MOBILE_BODY_SMALL.LineHeight};
  }
`;
