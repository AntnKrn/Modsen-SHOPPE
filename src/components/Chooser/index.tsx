import React, { useState } from 'react';

import { ChooserOpenner } from '../../assets/icons/ChooserOpenner';

import {
  ChooserText,
  ChooserWrapper,
  OptionWrapper,
  TextAndSVGWrapper,
} from './index.styled';
import { chooserProps } from './types';

export const Chooser = ({
  chooserText,
  options,
  onClick,
  state,
}: chooserProps) => {
  const [chosenText, setChosenText] = useState<string>(state);

  const handleOptionClick = (option: string) => {
    onClick(option);
    setChosenText(option);
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
        <TextAndSVGWrapper onClick={() => handleOptionClick('')}>
          By default
        </TextAndSVGWrapper>
        {options.map((option: string) => (
          <TextAndSVGWrapper
            key={option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </TextAndSVGWrapper>
        ))}
      </OptionWrapper>
    </ChooserWrapper>
  );
};
