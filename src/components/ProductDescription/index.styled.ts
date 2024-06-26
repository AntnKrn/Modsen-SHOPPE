import styled from 'styled-components';
import {
  DESKTOP_HEADING3,
  DESKTOP_HEADING5,
} from '../../constants/styles/fonts';

export const ProductDescriptionWrapper = styled.div`
  margin-top: 123px;
`;
export const DesctiptionTextHeader = styled.h1`
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};
  margin-bottom: 34px;
`;

export const DesctiptionText = styled.span`
  margin-top: 39px;
  display: block;
  color: rgba(112, 112, 112, 1);
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
`;
