import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_HEADING3,
  DESKTOP_HEADING5,
  MOBILE_HEADING2,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const ProductDescriptionWrapper = styled.div`
  margin-top: 123px;

  @media (${resolution.laptop}) {
    margin-top: 15px;
    padding: 18px 0 18px;
    border-top: 1px solid ${COLORS.COLOR_LIGHT_GRAY};
    border-bottom: 1px solid ${COLORS.COLOR_LIGHT_GRAY};
  }
`;

export const DesctiptionTextHeader = styled.h1`
  margin-bottom: 34px;
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};

  span {
    display: none;
    position: absolute;
    right: 18px;
    rotate: -90deg;
    cursor: pointer;
  }

  p {
    display: none;
    color: ${COLORS.COLOR_GRAY};
  }

  @media (${resolution.laptop}) {
    text-align: left;
    margin-bottom: 0;
    font-size: ${MOBILE_HEADING2.Size};
    font-weight: ${MOBILE_HEADING2.Weight};
    line-height: ${MOBILE_HEADING2.LineHeight};

    &::text-align-last {
      text-align: right;
    }

    span {
      display: inline;
    }
  }
`;

export const DesctiptionText = styled.span`
  display: block;
  margin-top: 39px;
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  color: rgba(112, 112, 112, 1);

  @media (${resolution.laptop}) {
    display: none;
  }
`;
