import styled from 'styled-components';

export const ImgSlider = styled.img`
  object-fit: fill;
  width: 100%;
  height: 646px;
  display: block;
`;

export const ImgSliderButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  padding: 3rem;
  transition: background-color 100ms ease-in-out;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
