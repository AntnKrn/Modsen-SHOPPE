import styled from 'styled-components';
import { DESKTOP_HEADING5 } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const CatalogFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputForSearch = styled.input`
  width: 261px;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${COLORS.COLOR_GRAY};
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  padding-bottom: 5px;
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;

export const SearchInputWrapper = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const SearchWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const PriceWrapper = styled.div``;
export const PriceInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const PriceProgress = styled.div`
  height: 0px;
  border: 0.5px solid black;
`;
export const PriceInput = styled.input`
  width: 100%;
  height: 1px;
  position: absolute;
  pointer-events: none;
  &:nth-of-type(1) {
    transform: rotate(180deg);
    appearance: none;
  }
  &::-webkit-slider-thumb {
    pointer-events: auto;
    background-color: blue;
  }

  &::-moz-range-thumb {
    pointer-events: auto;
    background-color: blue;
  }
`;

export const TextInsidePriceInput = styled.span``;
