import React, { useRef } from 'react';

import { Divider } from '../Divider';

import {
  DesctiptionText,
  DesctiptionTextHeader,
  ProductDescriptionWrapper,
} from './index.styled';
import { productDescriptionProps } from './types';

export const ProductDescription = ({
  description,
}: productDescriptionProps) => {
  const ref = useRef<HTMLParagraphElement>();

  const onClickDescription = () => {
    const display = ref.current.style.display;
    ref.current.style.display = display === 'none' ? 'inline-block' : 'none';
  };

  return (
    <ProductDescriptionWrapper>
      <DesctiptionTextHeader onClick={onClickDescription}>
        Description <span>&lt;</span>
        <p ref={ref}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius
          minima nobis! Commodi minus ducimus impedit tenetur fugiat unde soluta
          sit! Saepe eligendi autem vel quam quae. Distinctio, quaerat
          architecto.
        </p>
      </DesctiptionTextHeader>
      <Divider />
      <DesctiptionText>{description}</DesctiptionText>
    </ProductDescriptionWrapper>
  );
};
