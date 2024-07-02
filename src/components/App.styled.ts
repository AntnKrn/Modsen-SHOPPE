import styled, { createGlobalStyle } from 'styled-components';

import AllertaStencil from '../assets/fonts/AllertaStencil.ttf';
import DMSans from '../assets/fonts/DMSans.ttf';
import { resolution } from '../constants/resolutions';
import { COLORS } from '../constants/styles/mainColors';
export const Global = createGlobalStyle<{ $theme: boolean }>`
    @font-face {
        font-family: DM Sans;
        src: url(${DMSans});

    }
    @font-face {
        font-family: Allerta Stencil;
        src: url(${AllertaStencil});
    }
    :root {
        --bg-color: ${(props) => (props.$theme ? `${COLORS.COLOR_BLACK}` : `${COLORS.COLOR_WHITE}`)};
        --text-color: ${(props) => (props.$theme ? `${COLORS.COLOR_WHITE}` : `${COLORS.COLOR_BLACK}`)};
    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: DM Sans;
       
    }
    a, a:link, a:visited, a:hover  {
        text-decoration: none;
        color: var(--text-color);
    }

    input, button {
        color: var(--text-color);
        background-color: var(--bg-color);
        border: none;
        border-radius: 0;

        &:focus {
            outline: none;
        }
    }

    svg {
        display: block;
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
        transition: 1s;
    }
`;

export const AppWrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;

  margin: 100px;

  @media (${resolution.desktop}) {
    margin: 15px;
    min-height: calc(100vh - 30px);
  }
`;
