import styled from 'styled-components';

import { DESKTOP_BODY_MEDIUM } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const PriceInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const PriceProgress = styled.div`
  height: 2px;
  left: 0;
  right: 0;
  position: absolute;
  border-radius: 5px;
  background-color: var(--text-color);
  transition: 0.5;
`;
export const PriceWrapper = styled.div`
  margin-top: 39px;
`;

export const UnderFilterText = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceInput = styled.input`
  width: 100%;
  height: 0px;
  position: absolute;
  pointer-events: none;

  &::-webkit-slider-thumb {
    border: none;
    width: 2px;
    height: 10px;
    pointer-events: auto;
    background-color: var(--text-color);
  }

  &::-moz-range-thumb {
    border: none;
    width: 2px;
    height: 10px;
    pointer-events: auto;
    background-color: var(--text-color);
  }
`;

export const TextInsidePriceInput = styled.span`
  color: rgba(112, 112, 112, 1);
  font-size: ${DESKTOP_BODY_MEDIUM.Size};
  font-weight: ${DESKTOP_BODY_MEDIUM.Weight};
  line-height: ${DESKTOP_BODY_MEDIUM.LineHeight};

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
