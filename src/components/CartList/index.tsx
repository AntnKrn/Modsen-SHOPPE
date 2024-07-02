import React from 'react';
import { useSelector } from 'react-redux';

import { IBusketProdut } from '../../interfaces/IBusket';
import {
  useClearCartMutation,
  useGetBusketQuery,
} from '../../store/api/busket/busket';
import { RootState } from '../../store/store';
import { CartItem } from '../CartItem';
import { EmptyCart } from '../EmptyCart';
import { Loader } from '../Loader/index.styled';

import { CartListWrapper, OrderText, OrderTextWrapper } from './index.styled';

export const CartList = () => {
  const uuid = useSelector((state: RootState) => state.auth.uuid);
  const [clearCart] = useClearCartMutation();
  const { data, isSuccess } = useGetBusketQuery(uuid);

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
          <OrderText onClick={() => clearCart(uuid)}>Shop Now</OrderText>
        </OrderTextWrapper>
      </>
    );
  };
  return (
    <section>
      <CartListWrapper>
        {isSuccess && data?.length !== 0 ? (
          ShowCart()
        ) : data?.length === 0 ? (
          <EmptyCart />
        ) : (
          <Loader />
        )}
      </CartListWrapper>
    </section>
  );
};
