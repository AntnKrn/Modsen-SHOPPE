import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';

export const StyledDivider = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid rgba(216, 216, 216, 1);

  @media (${resolution.laptop}) {
    display: none;
  }
`;
