import styled from 'styled-components';
import { COLORS } from '../../constants/styles/mainColors';
import { DESKTOP_BODY_MEDIUM } from '../../constants/styles/fonts';

export const PriceInputWrapper = styled.div`
  width: 100%;
  position: relative;

  #price-progress {
    height: 5px;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 5px;
    background-color: black;
  }
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
    pointer-events: auto;
    background-color: blue;
  }

  &::-moz-range-thumb {
    pointer-events: auto;
    background-color: blue;
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
