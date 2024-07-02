import React, { useRef } from 'react';

import { Email } from '../../assets/icons/socialMedia/Email';
import { Facebook } from '../../assets/icons/socialMedia/Facebook';
import { Instagram } from '../../assets/icons/socialMedia/Instagram';
import { Twitter } from '../../assets/icons/socialMedia/Twitter';
import { Star } from '../../assets/icons/Star';
import { ImgSector } from '../ImgSector';

import {
  DesktopProductInfo,
  MobileProductInfo,
  ProductInfoIcons,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  ProductRating,
  ProductTextInfo,
  ViewMore,
} from './index.styled';
import { IProductInfoProps } from './IProductInfoProps';

export const ProductInfo = ({ ...product }: IProductInfoProps) => {
  const ref = useRef<HTMLSpanElement>();

  const onClickViewMore = () => {
    const display = ref.current.style.display;
    console.log(display);
    ref.current.style.display = display === 'none' ? 'inline' : 'none';
  };

  return (
    <>
      <DesktopProductInfo>
        <ImgSector imgUrl={product.image} />
        <ProductInfoWrapper>
          <ProductName>{product.title}</ProductName>
          <ProductPrice>$ {product.price}</ProductPrice>
          <ProductRating style={{ marginTop: '64px' }}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <ProductTextInfo style={{ marginLeft: '14px' }}>
              {product.rating.count} customer review
            </ProductTextInfo>
          </ProductRating>
          <ProductTextInfo style={{ marginTop: '19px' }}>
            {product.description}
          </ProductTextInfo>
          <ProductInfoIcons style={{ marginTop: '189px' }}>
            <Email />
            <Facebook />
            <Instagram />
            <Twitter />
          </ProductInfoIcons>
          <ProductTextInfo style={{ position: 'absolute', bottom: '0px' }}>
            Categories: {product.category}
          </ProductTextInfo>
        </ProductInfoWrapper>
      </DesktopProductInfo>
      <MobileProductInfo>
        <img src={product.image} width="100%" height="374px" />
        <ProductInfoWrapper>
          <ProductName>{product.title}</ProductName>
          <ProductPrice>$ {product.price}</ProductPrice>
          <ProductTextInfo>
            {product.description}
            <span ref={ref}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quibusdam illum deserunt, excepturi aliquid eum necessitatibus
              voluptatum impedit itaque iusto pariatur. Totam unde sit veniam
              eum laboriosam. Soluta, voluptate doloribus.
            </span>
            <ViewMore onClick={() => onClickViewMore()}>
              View more &gt;
            </ViewMore>
          </ProductTextInfo>
        </ProductInfoWrapper>
      </MobileProductInfo>
    </>
  );
};
