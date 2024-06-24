import styled from 'styled-components';
import {
  DESKTOP_BODY_MEDIUM,
  DESKTOP_HEADING4,
} from '../../constants/styles/fonts';

export const ImgSlider = styled.img`
  object-fit: contain;
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

export const OnCarouselProductInfo = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 10px;
  left: 20px;
  bottom: 50px;
`;

export const ProductNameOnCarousel = styled.p`
  font-size: ${DESKTOP_HEADING4.Size};
  font-weight: ${DESKTOP_HEADING4.Weight};
  line-height: ${DESKTOP_HEADING4.LineHeight};
  color: var(--text-color);
`;

export const ProductCostOnCarousel = styled.p`
  font-size: ${DESKTOP_BODY_MEDIUM.Size};
  font-weight: ${DESKTOP_BODY_MEDIUM.Weight};
  line-height: ${DESKTOP_BODY_MEDIUM.LineHeight};
  color: var(--text-color);
`;

export const ProductLinkOnCarousel = styled.p`
  font-size: ${DESKTOP_BODY_MEDIUM.Size};
  font-weight: ${DESKTOP_BODY_MEDIUM.Weight};
  line-height: ${DESKTOP_BODY_MEDIUM.LineHeight};
  border: 1px solid var(--text-color);
  color: var(--text-color);
  border-radius: 4px;
  padding: 7px;
  width: 103px;
`;
