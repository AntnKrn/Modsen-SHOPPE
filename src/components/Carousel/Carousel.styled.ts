import styled from 'styled-components';

export const ImgSlider = styled.img`
  object-fit: fill;
  width: 100%;
  height: 646px;
  display: block;
  border-radius: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  gap: 13.71px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 26.29px;
`;

export const ImgSliderButton = styled.button<{ $number?: number }>`
  cursor: pointer;
  height: 9.14px;
  width: 9.14px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  transform: scale(1);
  transition: all 0.7s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
    transform: scale(1.75);
    transition: all 0.5s ease;
    background-color: rgba(28, 28, 28, 0);
  }
  &.active {
    border: 1px solid rgba(255, 255, 255, 1);
    transform: scale(1.75);
    transition: all 0.5s ease;
    background-color: rgba(28, 28, 28, 0);
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
