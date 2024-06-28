import styled from 'styled-components';
import { COLORS } from '../../constants/styles/mainColors';
import { resolution } from '../../constants/resolutions';
import { MOBILE_HEADING2 } from '../../constants/styles/fonts';

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
  margin: 15px 12px 16px 12px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
  svg {
    transition: 1s;
  }

  @media (${resolution.laptop}) {
    font-size: ${MOBILE_HEADING2.Size};
    font-weight: ${MOBILE_HEADING2.Weight};
    line-height: ${MOBILE_HEADING2.LineHeight};
    margin: 0;
    width: auto;
    height: 25px;
  }
`;

export const ChooserText = styled.p``;

export const Options = styled.div`
  transition: 1s;
  position: absolute;
  z-index: 1;
  width: 259px;
  height: 51px;
  border: 1px solid ${COLORS.COLOR_GRAY};
  border-radius: 4px;

  @media (${resolution.laptop}) {
    width: auto;
    height: 25px;
  }
`;

export const OptionWrapper = styled.div`
  border: 1px solid ${COLORS.COLOR_GRAY};
  border-radius: 4px;
  background-color: var(--bg-color);
  width: 100%;
  display: none;
  position: absolute;
  z-index: 3;
  margin: 0px;
`;
