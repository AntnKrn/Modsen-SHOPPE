import styled from 'styled-components';

export const Loader = styled.div`
  & {
    position: relative;
    top: 50%;
    width: 15px;
    margin: 0 auto;
    aspect-ratio: 1;
    animation: l9-0 1.5s infinite steps(2);
    transform: translate(-50%, -50%);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: #000;
    inset: 0;
  }

  &::before {
    box-shadow: 26px 0;
    transform: translateX(-26px);
    animation: l9-1 0.75s infinite linear alternate;
  }

  &::after {
    transform: translateX(13px) rotate(0deg) translateX(13px);
    animation: l9-2 0.75s infinite linear alternate;
  }

  @keyframes l9-0 {
    0%,
    49.9% {
      transform: scale(1);
    }

    50%,
    100% {
      transform: scale(-1);
    }
  }

  @keyframes l9-1 {
    100% {
      box-shadow: 52px 0;
    }
  }
  @keyframes l9-2 {
    100% {
      transform: translateX(13px) rotate(-180deg) translateX(13px);
    }
  }
`;
