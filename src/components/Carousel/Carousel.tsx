import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import {
  ButtonWrapper,
  ImgSlider,
  ImgSliderButton,
  ImgWrapper,
  OnCarouselProductInfo,
  ProductCostOnCarousel,
  ProductLinkOnCarousel,
  ProductNameOnCarousel,
} from './Carousel.styled';
import { Link } from 'react-router-dom';

export const Carousel = () => {
  const imagesUrls: string[] = [img1, img2, img3, img4, img5];
  const [imageIndex, setImageIndex] = useState(0);
  const ref: MutableRefObject<Element> = useRef<Element | null>(null);

  const onClickButton = (
    imgIndex?: number,
    type?: string,
    btn?: Element | MutableRefObject<Element>,
  ) => {
    if (type) {
      switch (type) {
        case 'remove': {
          (btn as Element).classList.remove('active');
          break;
        }

        case 'add': {
          (btn as Element).classList.add('active');
          break;
        }
      }
    } else {
      (btn as Element).classList.remove('active');
      setImageIndex(imgIndex);
    }
  };

  useEffect(() => {
    ref.current = document.getElementsByClassName(`img${imageIndex + 1}`)[0];

    const toggle = setInterval(() => {
      setImageIndex((index) => {
        if (ref.current) {
          onClickButton(null, 'remove', ref.current);
        }
        if (index === imagesUrls.length - 1) return 0;
        return index + 1;
      });
    }, 4000);

    if (ref.current) {
      onClickButton(null, 'add', ref.current);
    }
    return () => clearInterval(toggle);
  });

  return (
    <ImgWrapper>
      <div>
        <OnCarouselProductInfo>
          <ProductNameOnCarousel>Name</ProductNameOnCarousel>
          <ProductCostOnCarousel>$ 20,00</ProductCostOnCarousel>
          <Link to={`/product/${imageIndex + 1}`}>
            <ProductLinkOnCarousel>View Product</ProductLinkOnCarousel>
          </Link>
        </OnCarouselProductInfo>
        <ImgSlider src={imagesUrls[imageIndex]} alt="" />
        <ButtonWrapper>
          {imagesUrls.map((img, index) => (
            <ImgSliderButton
              onClick={() => onClickButton(index, null, ref.current)}
              key={img}
              $number={index}
              className={`img${index + 1} ${index === 0 ? 'active' : 0}`}
            />
          ))}
        </ButtonWrapper>
      </div>
    </ImgWrapper>
  );
};
