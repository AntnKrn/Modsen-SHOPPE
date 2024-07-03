import styled from 'styled-components';

import { DESKTOP_BODY_LARGE } from '../../constants/styles/fonts';

export const CartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 20px 0px;
`;

export const OrderText = styled.span`
  padding: 7px;
  border: 1px solid var(--text-color);
  border-radius: 4px;
  transition: 1s;
  cursor: pointer;
  font-size: ${DESKTOP_BODY_LARGE.Size};
  font-weight: ${DESKTOP_BODY_LARGE.Weight};
  line-height: ${DESKTOP_BODY_LARGE.LineHeight};
  color: var(--text-color);

  &:nth-of-type(2):hover {
    background-color: var(--text-color);
    color: var(--bg-color);
  }
`;

export const OrderTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 100px;
`;
