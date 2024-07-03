import styled from 'styled-components';

import Search from '../../assets/icons/socialMedia/svg/search.svg';
import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_HEADING5,
  MOBILE_HEADING3,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const StyledSearch = styled(Search)`
  position: absolute;
  right: 0;
  top: 0;
  width: 19px;
  height: 19px;
  fill: var(--text-color);

  @media (${resolution.laptop}) {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 12px;
    height: 12px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  border: none;
  border-bottom: 1px solid var(--text-color);
  outline: none;

  @media (${resolution.laptop}) {
    height: 32px;
    padding: 10px 30px 10px;
    font-weight: ${MOBILE_HEADING3.Weight};
    font-size: ${MOBILE_HEADING3.Size};
    line-height: ${MOBILE_HEADING3.LineHeight};
    color: ${COLORS.COLOR_DARK_GRAY};
    border: none;
    border-radius: 4px;
    background-color: ${COLORS.COLOR_LIGHT_GRAY};
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
