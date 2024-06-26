import React from 'react';
import { ImgSector } from '../ImgSector';
import {
  ProductInfoContainer,
  ProductInfoIcons,
  ProductInfoText,
  ProductName,
  ProductPrice,
  ProductRating,
  ProductTextInfo,
} from './index.styled';
import { Star } from '../../assets/icons/Star';
import { Email } from '../../assets/icons/socialMedia/Email';
import { Facebook } from '../../assets/icons/socialMedia/Facebook';
import { Instagram } from '../../assets/icons/socialMedia/Instagram';
import { Twitter } from '../../assets/icons/socialMedia/Twitter';
import { IProductInfoProps } from './IProductInfoProps';

export const ProductInfo = ({ ...product }: IProductInfoProps) => {
  return (
    <ProductInfoContainer>
      <ImgSector imgUrl={product.image} />
      <ProductInfoText>
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
      </ProductInfoText>
    </ProductInfoContainer>
  );
};
