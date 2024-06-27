import styled from 'styled-components';
import {
  DESKTOP_HEADING2,
  MOBILE_HEADING2,
} from '../../constants/styles/fonts';
import { resolution } from '../../constants/resolutions';

export const SimilarItems = styled.h2`
  margin-top: 96px;
  margin-bottom: 47px;
  font-size: ${DESKTOP_HEADING2.Size};
  font-weight: ${DESKTOP_HEADING2.Weight};
  line-height: ${DESKTOP_HEADING2.LineHeight};

  @media (${resolution.laptop}) {
    font-size: ${MOBILE_HEADING2.Size};
    margin-top: 40px;
    margin-bottom: 69px;
    font-weight: ${MOBILE_HEADING2.Weight};
    line-height: ${MOBILE_HEADING2.LineHeight};
  }
`;

export const ProductPageMain = styled.main`
  margin-top: 128px;

  @media (${resolution.laptop}) {
    margin: 40px 0 13px;
    text-align: center;
  }
`;

export const SimilarShopList = styled.div`
  @media (max-width: 520px) {
    > :first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 520px) and (${resolution.laptop}) {
    > :first-child {
      display: flex;
      flex-direction: row;
      margin: 0 auto 69px;
    }
  }
`;
