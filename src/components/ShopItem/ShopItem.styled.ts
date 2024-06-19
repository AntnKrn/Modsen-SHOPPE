import styled from 'styled-components';
import {
  DESKTOP_HEADING3,
  DESKTOP_HEADING4,
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
`;

export const ShopItemImg = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 380px;
`;

export const ProductName = styled.h3`
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};
`;

export const ProductCost = styled.span`
  color: ${COLORS.COLOR_ACCENT};
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
`;
