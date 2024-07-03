import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';

export const ShopListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 380px);
  justify-content: space-between;
  column-gap: 4%;
  row-gap: 86px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 252px;

  @media (${resolution.laptop}) {
    grid-template-columns: repeat(auto-fill, 136px);
    grid-template-rows: repeat(auto-fill, 180px);
    row-gap: 24px;
    margin-bottom: 94px;
  }

  @media ((min-width: 768px) and (${resolution.desktop})) {
    width: fit-content;
  }
`;
