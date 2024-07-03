import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';
import { MOBILE_HEADING2 } from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const ChooserWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 259px;
  height: 51px;
  border: 1px solid ${COLORS.COLOR_GRAY};
  border-radius: 4px;

  &:hover {
    display: block;

    svg {
      rotate: -180deg;
    }

    div:nth-child(2) {
      display: block;
    }
  }

  @media (${resolution.laptop}) {
    width: auto;
    height: 25px;
  }
`;

export const TextAndSVGWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 15px 12px 16px 12px;
  cursor: pointer;

  svg {
    transition: 1s;
  }

  @media (${resolution.laptop}) {
    width: auto;
    height: 25px;
    margin: 0;
    font-size: ${MOBILE_HEADING2.Size};
    font-weight: ${MOBILE_HEADING2.Weight};
    line-height: ${MOBILE_HEADING2.LineHeight};
  }
`;

export const ChooserText = styled.p``;

export const Options = styled.div`
  position: absolute;
  z-index: 1;
  width: 259px;
  height: 51px;
  border: 1px solid ${COLORS.COLOR_GRAY};
  border-radius: 4px;
  transition: 1s;

  @media (${resolution.laptop}) {
    width: auto;
    height: 25px;
  }
`;

export const OptionWrapper = styled.div`
  display: none;
  position: absolute;
  z-index: 3;
  margin: 0px;
  width: 100%;
  background-color: var(--bg-color);
  border: 1px solid ${COLORS.COLOR_GRAY};
  border-radius: 4px;
`;
