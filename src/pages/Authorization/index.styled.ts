import styled from 'styled-components';
import {
  DESKTOP_BODY_LARGE,
  DESKTOP_HEADING1,
  MOBILE_HEADING1,
  MOBILE_HEADING2,
} from '../../constants/styles/fonts';
import { resolution } from '../../constants/resolutions';

export const StyledAuthorizationMain = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;

  @media (${resolution.desktop}) {
    margin: 30px 0 50px;
  }
`;

export const AuthForm = styled.form`
  margin: 0 auto;
  width: 1000px;

  @media (${resolution.desktop}) {
    width: 100%;
  }
`;

export const InputsField = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 100px;

  @media (${resolution.desktop}) {
    row-gap: 50px;
  }
`;

export const Title = styled.div`
  font-size: ${DESKTOP_HEADING1.Size};
  font-weight: ${DESKTOP_HEADING1.Weight};
  line-height: ${DESKTOP_HEADING1.LineHeight};
  text-align: center;
  margin-bottom: 100px;

  @media (${resolution.desktop}) {
    font-size: ${MOBILE_HEADING1.Size};
    font-weight: ${MOBILE_HEADING1.Weight};
    line-height: ${MOBILE_HEADING1.LineHeight};
    margin-bottom: 50px;
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
  margin: 50px auto 10px;
  display: block;

  &:active,
  &:hover {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  @media (${resolution.desktop}) {
    width: 100%;
    font-size: ${MOBILE_HEADING2.Size};
    font-weight: ${MOBILE_HEADING2.Weight};
    line-height: ${MOBILE_HEADING2.LineHeight};
  }
`;

export const SwitchFormWrapper = styled.div`
  p {
    text-align: center;
  }
  button {
    display: block;
    margin: 10px auto 0;
    border-radius: 4px;
    padding: 2px;
    border: 0.5px solid var(--text-color);
    cursor: pointer;
    transition: 1s;
    &:hover {
      background-color: var(--text-color);
      color: var(--bg-color);
    }
  }
`;
