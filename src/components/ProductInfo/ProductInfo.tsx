import React from 'react';
import { ImgSector } from '../ImgSector/ImgSector';
import {
  ProductInfoContainer,
  ProductInfoIcons,
  ProductInfoText,
  ProductName,
  ProductPrice,
  ProductRating,
  ProductTextInfo,
} from './ProductInfo.styled';
import { Busket } from '../../assets/icons/busket';
import { Star } from '../../assets/icons/Star';
import { Twitter } from '../../assets/icons/socialMedia/Twitter';
import { Email } from '../../assets/icons/socialMedia/Email';
import { Facebook } from '../../assets/icons/socialMedia/Facebook';
import { Instagram } from '../../assets/icons/socialMedia/Instagram';

interface IProductInfoProps {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}

export const ProductInfo = ({ ...product }: IProductInfoProps) => {
  console.log(product);
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
