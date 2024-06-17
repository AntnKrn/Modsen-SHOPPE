import styled from 'styled-components';
import {
  DESKTOP_HEADING2,
  DESKTOP_HEADING4,
  DESKTOP_HEADING5,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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

export const ProductTextInfo = styled.h6`
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  display: inline-block;
  color: rgba(112, 112, 112, 1);
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
`;

export const ProductPrice = styled.h4`
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
  color: ${COLORS.COLOR_ACCENT};
  margin-top: 25px;
`;
