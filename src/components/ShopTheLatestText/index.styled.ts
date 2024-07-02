import { styled } from 'styled-components';

import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_HEADING1,
  MOBILE_HEADING2,
} from '../../constants/styles/fonts';

export const StyledShopTheLastText = styled.h2`
  font-weight: ${DESKTOP_HEADING1.Weight};
  font-size: ${DESKTOP_HEADING1.Size};
  line-height: ${DESKTOP_HEADING1.LineHeight};

  @media (${resolution.laptop}) {
    font-weight: ${MOBILE_HEADING2.Weight};
    font-size: ${MOBILE_HEADING2.Size};
    line-height: ${MOBILE_HEADING2.LineHeight};
  }
`;
