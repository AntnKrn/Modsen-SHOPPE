import React from 'react';

import { Option, Select } from './index.styled';

interface IShopSelectProps {
  nameSelect: string;
  options: string[];
}

export const ShopSelect = ({ nameSelect, options }: IShopSelectProps) => {
  return (
    <Select name={nameSelect}>
      <Option value="0">Sort By</Option>
      {options.map((item, index) => (
        <Option key={item} value={index + 2}>
          {item}
        </Option>
      ))}
    </Select>
  );
};
