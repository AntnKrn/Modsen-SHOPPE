import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import {
  ButtonWrapper,
  ImgSlider,
  ImgSliderButton,
  OnCarouselProductInfo,
  ProductCostOnCarousel,
  ProductLinkOnCarousel,
  ProductNameOnCarousel,
} from './index.styled';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProducts';

interface ICarouselProps {
  products: IProduct[];
}
export const Carousel = ({ products }: ICarouselProps) => {
  const imagesUrls: string[] = [];
  products.map((item: IProduct) => imagesUrls.push(item.image));
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
    <div>
      <OnCarouselProductInfo>
        <ProductNameOnCarousel>
          {products[imageIndex].title}
        </ProductNameOnCarousel>
        <ProductCostOnCarousel>
          {products[imageIndex].price}
        </ProductCostOnCarousel>
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
  );
};
