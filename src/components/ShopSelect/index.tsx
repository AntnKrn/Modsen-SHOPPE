import React from 'react';

import { Option, Select } from './index.styled';
import { shopSelectProps } from './types';

export const ShopSelect = ({ nameSelect, options }: shopSelectProps) => {
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
