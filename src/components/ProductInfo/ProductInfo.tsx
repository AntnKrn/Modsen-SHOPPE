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

export const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <ImgSector />
      <ProductInfoText>
        <ProductName>Lira Earrings</ProductName>
        <ProductPrice>$ 20,00</ProductPrice>
        <ProductRating style={{ marginTop: '64px' }}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <ProductTextInfo style={{ marginLeft: '14px' }}>
            1 customer review
          </ProductTextInfo>
        </ProductRating>
        <ProductTextInfo style={{ marginTop: '19px' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          minus dolorum cumque aperiam nobis et, vel quae vero dolores
          exercitationem beatae blanditiis, ipsa sint natus ipsam consectetur
          nemo consequatur dolorem.
        </ProductTextInfo>
        <ProductInfoIcons style={{ marginTop: '189px' }}>
          <Busket />
          <Busket />
          <Busket />
          <Busket />
        </ProductInfoIcons>
        <ProductTextInfo style={{ position: 'absolute', bottom: '0px' }}>
          Categories: Categories names
        </ProductTextInfo>
      </ProductInfoText>
    </ProductInfoContainer>
  );
};
