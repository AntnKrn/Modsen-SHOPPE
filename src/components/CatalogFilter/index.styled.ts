import styled from 'styled-components';

import { CloseMenu } from '../../assets/icons/CloseMenu';
import Filter from '../../assets/icons/Filters.svg';
import { resolution } from '../../constants/resolutions';
import { MOBILE_BODY_SMALL } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const CloseMenuWrapper = styled.div`
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;

  @media (${resolution.laptop}) {
    display: block;
  }
`;

export const StyledCloseMenu = styled(CloseMenu)``;

export const CatalogFilterWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (${resolution.laptop}) {
    display: ${(props) => (props.$isOpen ? 'flex' : `none`)};
    justify-content: center;
    position: fixed;
    z-index: 3;
    top: 0;
    background-color: var(--bg-color);
    height: 100vh;

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
  align-items: center;
  gap: 8px;
  margin: 16px 0px;
  color: ${COLORS.COLOR_ACCENT};

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
  position: relative;
  width: 100%;
`;

export const PriceProgress = styled.div`
  height: 0px;
  border: 0.5px solid black;
`;

export const PriceInput = styled.input`
  position: absolute;
  width: 100%;
  height: 1px;
  pointer-events: none;

  &:nth-of-type(1) {
    transform: rotate(180deg);
    appearance: none;
  }

  &::-webkit-slider-thumb {
    pointer-events: auto;
  }

  &::-moz-range-thumb {
    pointer-events: auto;
  }
`;

export const TextInsidePriceInput = styled.span``;
