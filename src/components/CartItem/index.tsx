import React from 'react';
import { useSelector } from 'react-redux';

import { Minus } from '../../assets/icons/Minus';
import { Plus } from '../../assets/icons/Plus';
import {
  useDeleteFromBusketMutation,
  useUpdateBusketMutation,
} from '../../store/api/busket/busket';
import { RootState } from '../../store/store';

import {
  CartDescription,
  CartImage,
  CartItemContainer,
  CartItemWrapper,
  QunatityWrapper,
} from './index.styled';
import { cartItemProps } from './types';

export const CartItem = ({
  image,
  title,
  price,
  quantity,
  id,
}: cartItemProps) => {
  const uuid = useSelector((state: RootState) => state.auth.uuid);
  const [deleteProduct] = useDeleteFromBusketMutation();
  const [updateProduct] = useUpdateBusketMutation();

  const update = (type: string) => {
    updateProduct({
      uuid: uuid,
      id: id,
      image: image,
      title: title,
      price: price,
      quantity: type === '+' ? quantity + 1 : quantity - 1,
    });
  };

  const onClickDelete = () => {
    deleteProduct({ uuid: uuid, id: id });
  };

  return (
    <CartItemWrapper>
      <CartItemContainer>
        <CartImage>
          <img src={image} />
        </CartImage>
        <CartDescription>
          <p>{title}</p>
          <p>$ {price}</p>
          <QunatityWrapper>
            <div onClick={quantity !== 1 ? () => update('-') : null}>
              <Minus />
            </div>
            <span> {quantity} </span>
            <div onClick={() => update('+')}>
              <Plus />
            </div>
          </QunatityWrapper>
          <p onClick={() => onClickDelete()}>Remove</p>
        </CartDescription>
      </CartItemContainer>
    </CartItemWrapper>
  );
};
