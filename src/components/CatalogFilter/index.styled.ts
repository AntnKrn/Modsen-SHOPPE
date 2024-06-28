import styled from 'styled-components';
import { resolution } from '../../constants/resolutions';
import Filter from '../../assets/icons/Filters.svg';
import { COLORS } from '../../constants/styles/mainColors';
import { MOBILE_BODY_SMALL } from '../../constants/styles/fonts';
import { CloseMenu } from '../../assets/icons/CloseMenu';

export const CloseMenuWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;
export const StyledCloseMenu = styled(CloseMenu)``;

export const CatalogFilterWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  @media (${resolution.laptop}) {
    display: ${(props) => (props.$isOpen ? 'flex' : `none`)};
    top: 0;
    position: fixed;
    z-index: 3;
    background-color: var(--bg-color);
    height: 100vh;
    justify-content: center;

    & > div:nth-child(1) {
      display: none;
    }
  }
`;

export const FilterSVG = styled(Filter)`
  color: ${COLORS.COLOR_ACCENT};
`;

export const MobileFilterWrapper = styled.div`
  display: none;
  color: ${COLORS.COLOR_ACCENT};
  align-items: center;
  gap: 8px;
  margin: 16px 0px;

  span {
    font-size: ${MOBILE_BODY_SMALL.Size};
    font-weight: ${MOBILE_BODY_SMALL.Weight};
    line-height: ${MOBILE_BODY_SMALL.LineHeight};
  }
  @media (${resolution.laptop}) {
    display: flex;
    align-items: center;
  }
`;

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
