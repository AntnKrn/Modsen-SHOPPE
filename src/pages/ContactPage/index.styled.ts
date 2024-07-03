import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';

export const FormWrapper = styled.div`
  form {
    text-align: center;
    margin: 125px 170px 250px;

    @media (${resolution.desktop}) {
      margin: 39px 0 96px;
    }
  }

  form > div {
    display: grid;
    column-gap: 116px;
    row-gap: 94px;
    margin: 108px 0px 96px;

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

    @media (${resolution.desktop}) {
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
  }
`;
