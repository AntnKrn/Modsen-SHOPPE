import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';

export const CatalogContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 35px;
  margin-top: 39px;

  @media (${resolution.laptop}) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const ShopPageMain = styled.main`
  margin-top: 39px;
`;
