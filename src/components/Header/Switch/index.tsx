import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { change } from '../../../store/features/theme/themeSlice';

import { Input, Label, Switch } from './index.styled';

export const Switcher = () => {
  const [isDark, setIsDark] = useState(false);
  const dispatch = useDispatch();

  const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
    dispatch(change());
  };

  return (
    <Label>
      <Input checked={isDark} type="checkbox" onChange={handleSwitchChange} />
      <Switch />
    </Label>
  );
};
