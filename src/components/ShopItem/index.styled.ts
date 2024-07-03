import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_HEADING3,
  DESKTOP_HEADING4,
  MOBILE_BODY_SMALL,
  MOBILE_HEADING3,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const ShopItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 377px;
  height: 472px;
  margin: 0px;

  @media (${resolution.laptop}) {
    width: 136px;
    height: 188px;
  }
`;

export const ShopItemImg = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 380px;
  border-radius: 8px;
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
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

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
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
  color: ${COLORS.COLOR_ACCENT};

  @media (max-width: 768px) {
    font-size: ${MOBILE_BODY_SMALL.Size};
    font-weight: ${MOBILE_BODY_SMALL.Weight};
    line-height: ${MOBILE_BODY_SMALL.LineHeight};
  }
`;
