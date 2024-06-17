import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/styles/mainColors';

export const Global = createGlobalStyle<{ $theme: boolean }>`
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
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    
`;

export const AppWrapper = styled.div`
  min-height: calc(100vh - 200px);
  margin: 100px;
  display: flex;
  flex-direction: column;
`;
