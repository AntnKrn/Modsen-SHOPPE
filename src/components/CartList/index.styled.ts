import styled from 'styled-components';

import { DESKTOP_BODY_LARGE } from '../../constants/styles/fonts';

export const CartListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0px;
`;

export const OrderText = styled.span`
  font-size: ${DESKTOP_BODY_LARGE.Size};
  font-weight: ${DESKTOP_BODY_LARGE.Weight};
  line-height: ${DESKTOP_BODY_LARGE.LineHeight};

  border: 1px solid var(--text-color);
  color: var(--text-color);
  border-radius: 4px;
  padding: 7px;
  transition: 1s;
  cursor: pointer;
  &:nth-of-type(2):hover {
    background-color: var(--text-color);
    color: var(--bg-color);
  }
`;

export const OrderTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 100px;
  gap: 15px;
`;
