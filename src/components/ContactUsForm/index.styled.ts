import styled from 'styled-components';
import {
  DESKTOP_BODY_LARGE,
  DESKTOP_HEADING1,
  DESKTOP_HEADING3,
  MOBILE_BODY_SMALL,
  MOBILE_HEADING1,
} from '../../constants/styles/fonts';
import { resolution } from '../../constants/resolutions';

export const FormContainer = styled.form`
  text-align: center;
  margin: 125px 170px 250px;

  @media (${resolution.laptop}) {
    margin: 39px 0 96px;
    align-items: center;
  }
`;

export const ContainerContactUs = styled.div`
  max-width: 561px;
  height: 134px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  @media (${resolution.laptop}) {
    height: initial;
    margin: 0 0 69px;
  }
`;

export const Title = styled.h1`
  font-size: ${DESKTOP_HEADING1.Size};
  font-weight: ${DESKTOP_HEADING1.Weight};
  line-height: ${DESKTOP_HEADING1.LineHeight};

  @media (${resolution.laptop}) {
    font-size: ${MOBILE_HEADING1.Size};
    font-weight: ${MOBILE_HEADING1.Weight};
    line-height: ${MOBILE_HEADING1.LineHeight};
    text-align: left;
  }
`;

export const Description = styled.h3`
  font-size: ${DESKTOP_HEADING3.Size};
  font-weight: ${DESKTOP_HEADING3.Weight};
  line-height: ${DESKTOP_HEADING3.LineHeight};

  @media (${resolution.laptop}) {
    display: none;
  }
`;

export const InputsField = styled.div`
  margin: 108px 0px 96px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 116px;
  row-gap: 94px;

  input:hover {
    & + div {
      display: block;
    }
  }

  div:nth-of-type(5) {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 126px;
    input {
      padding-bottom: 44px;
    }
  }

  @media (${resolution.laptop}) {
    display: flex;
    flex-direction: column;
    gap: 47px;
    margin: 0;
    div:nth-of-type(5) {
      margin-top: 0px;

      input {
        padding: 0;
      }
    }
  }
`;

export const SendButton = styled.input`
  width: 500px;
  height: 51px;
  background-color: var(--text-color);
  color: var(--bg-color);
  font-size: ${DESKTOP_BODY_LARGE.Size};
  font-weight: ${DESKTOP_BODY_LARGE.Weight};
  line-height: ${DESKTOP_BODY_LARGE.LineHeight};
  border: 1px solid var(--text-color);
  border-radius: 4px;
  cursor: pointer;
  transition: 1s;

  &:active,
  &:hover {
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  @media (${resolution.laptop}) {
    font-size: ${MOBILE_BODY_SMALL.Size};
    font-weight: ${MOBILE_BODY_SMALL.Weight};
    line-height: ${MOBILE_BODY_SMALL.LineHeight};
    margin-top: 28px;
    width: 288px;
    height: 32px;
  }
`;
