import React, { useState } from 'react';
import {
  ChooserText,
  ChooserWrapper,
  OptionWrapper,
  TextAndSVGWrapper,
} from './Chooser.styled';
import { ChooserOpenner } from '../../assets/icons/ChooserOpenner';
import { useDispatch } from 'react-redux';
import {
  clearFilter,
  setFilter,
} from '../../store/features/filter/filterSlice';

interface IChooserProps {
  chooserText: string;
  options: string[];
}

export const Chooser = ({ chooserText, options }: IChooserProps) => {
  const [chosenText, setChosenText] = useState<string>();
  const dispatch = useDispatch();

  const onClickOption = (option: string) => {
    setChosenText(option);
    option
      ? dispatch(setFilter(`/category/${option}`))
      : dispatch(clearFilter());
  };
  return (
    <ChooserWrapper>
      <TextAndSVGWrapper>
        <ChooserText>
          {chosenText ? <span>{chosenText}</span> : <span>{chooserText}</span>}
        </ChooserText>
        <ChooserOpenner />
      </TextAndSVGWrapper>
      <OptionWrapper>
        <TextAndSVGWrapper onClick={() => onClickOption('')}>
          By default
        </TextAndSVGWrapper>
        {options.map((option: string) => (
          <TextAndSVGWrapper key={option} onClick={() => onClickOption(option)}>
            {option}
          </TextAndSVGWrapper>
        ))}
      </OptionWrapper>
    </ChooserWrapper>
  );
};
