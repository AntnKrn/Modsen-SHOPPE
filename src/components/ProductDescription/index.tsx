import React, { useRef } from 'react';
import { LineForFooterHeader } from '../Line';
import {
  DesctiptionText,
  DesctiptionTextHeader,
  ProductDescriptionWrapper,
} from './index.styled';

interface IProductDescription {
  description: string;
}
export const ProductDescription = ({ description }: IProductDescription) => {
  const ref = useRef<HTMLParagraphElement>();
  const onClickDescription = () => {
    const display = ref.current.style.display;
    console.log(display);
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
      <LineForFooterHeader />
      <DesctiptionText>{description}</DesctiptionText>
    </ProductDescriptionWrapper>
  );
};
