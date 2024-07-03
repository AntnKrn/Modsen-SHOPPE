import styled from 'styled-components';

import { DESKTOP_BODY_MEDIUM } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const PriceInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const PriceProgress = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 5px;
  background-color: var(--text-color);
  transition: 0.5;
`;

export const PriceWrapper = styled.div`
  margin-top: 39px;
`;

export const UnderFilterText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const PriceInput = styled.input`
  position: absolute;
  width: 100%;
  height: 0px;
  pointer-events: none;

  &::-webkit-slider-thumb {
    width: 2px;
    height: 10px;
    background-color: var(--text-color);
    border: none;
    pointer-events: auto;
  }

  &::-moz-range-thumb {
    width: 2px;
    height: 10px;
    background-color: var(--text-color);
    border: none;
    pointer-events: auto;
  }
`;

export const TextInsidePriceInput = styled.span`
  font-size: ${DESKTOP_BODY_MEDIUM.Size};
  font-weight: ${DESKTOP_BODY_MEDIUM.Weight};
  line-height: ${DESKTOP_BODY_MEDIUM.LineHeight};
  color: rgba(112, 112, 112, 1);

  &:last-child {
    color: ${COLORS.COLOR_ACCENT};
  }
`;

export const BackGroundProgressInput = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${COLORS.COLOR_GRAY};
`;
