import styled from 'styled-components';

import { DESKTOP_BODY_MEDIUM } from '../../constants/styles/fonts';

export const Select = styled.select`
  width: 261px;
  height: 53px;
  border: 1px solid rgba(216, 216, 216, 1);
  border-radius: 4px;
  background-color: inherit;
  color: inherit;
  margin: 16px 0px;
  padding: 16px;
  font-size: ${DESKTOP_BODY_MEDIUM.Size};
  font-weight: ${DESKTOP_BODY_MEDIUM.Weight};
  line-height: ${DESKTOP_BODY_MEDIUM.LineHeight};
`;

export const Option = styled.option`
  height: 100px;
`;
