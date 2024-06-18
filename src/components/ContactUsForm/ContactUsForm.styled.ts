import styled from 'styled-components';
import {
  DESKTOP_BODY_LARGE,
  DESKTOP_HEADING1,
  DESKTOP_HEADING3,
} from '../../constants/styles/fonts';

export const FormContainer = styled.form`
  text-align: center;
  margin: 125px 170px 250px;
`;

export const ContainerContactUs = styled.div`
  max-width: 561px;
  height: 134px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: ${DESKTOP_HEADING1.Size};
  font-weight: ${DESKTOP_HEADING1.Weight};
  line-height: ${DESKTOP_HEADING1.LineHeight};
`;

export const Description = styled.h3`
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};
`;

export const InputsField = styled.div`
  margin: 108px 0px 96px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 116px;
  row-gap: 94px;

  div:nth-of-type(5) {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 126px;
  }
`;

export const SendButton = styled.button`
  width: 500px;
  height: 53px;
  background-color: var(--text-color);
  color: var(--bg-color);
  font-size: ${DESKTOP_BODY_LARGE.Size};
  font-weight: ${DESKTOP_BODY_LARGE.Weight};
  line-height: ${DESKTOP_BODY_LARGE.LineHeight};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
