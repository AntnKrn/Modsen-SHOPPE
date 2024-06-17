import styled from 'styled-components';

export const CatalogFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
