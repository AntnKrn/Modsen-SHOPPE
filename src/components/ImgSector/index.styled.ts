import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';

export const ImgSectorContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 120px 120px 120px;
  grid-template-rows: 120px 120px 120px 120px;
  gap: 40px;

  @media (${resolution.laptop}) {
    display: block;
  }
`;

export const ImgSectorItem = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
  height: 100%;
  border-radius: 8px;
  &:first-child {
    grid-row: 1/5;
    grid-column: 2/6;
  }

  @media (${resolution.laptop}) {
    position: absolute;
    width: 80%;
    height: 374px;
  }
`;
