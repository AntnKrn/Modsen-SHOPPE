import React from 'react';
import { EmptyCartText, EmptyCartWrapper, GoShopButton } from './index.styled';

export const EmptyCart = () => {
  return (
    <EmptyCartWrapper>
      <EmptyCartText>
        Ooops... It's looks like that your cart is empty
      </EmptyCartText>
      <GoShopButton to="/shop">Go MODSEN SHOPPE</GoShopButton>
    </EmptyCartWrapper>
  );
};
