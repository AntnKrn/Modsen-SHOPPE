import React from 'react';
import {
  CartListWrapper,
  OrderText,
  OrderTextWrapper,
} from './CartList.styled';
import { useGetBusketQuery } from '../../store/api/busket/busket';
import { CartItem } from '../CartItem';
import { IBusketProdut } from '../../interfaces/IBusket';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Loader } from '../Loader/index.styled';

export const CartList = () => {
  const uuid = useSelector((state: RootState) => state.auth.uuid);
  const { data, isSuccess } = useGetBusketQuery(uuid);
  console.log(data);

  const ShowCart = () => {
    const total = data
      .reduce(
        (acc, currentValue) => acc + currentValue.price * currentValue.quantity,
        0,
      )
      .toFixed(2);
    return (
      <>
        <>
          {data.map((item: IBusketProdut) => (
            <CartItem {...item} key={item.image} />
          ))}
        </>
        <OrderTextWrapper>
          <OrderText>Total amount: $ {total}</OrderText>
          <OrderText>Shop Now</OrderText>
        </OrderTextWrapper>
      </>
    );
  };
  return (
    <section>
      <CartListWrapper>
        {isSuccess && data ? ShowCart() : <Loader />}
      </CartListWrapper>
    </section>
  );
};
