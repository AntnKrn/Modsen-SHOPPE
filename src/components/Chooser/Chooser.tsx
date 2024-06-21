import React, { useState } from 'react';
import {
  ChooserText,
  ChooserWrapper,
  OptionWrapper,
  TextAndSVGWrapper,
} from './Chooser.styled';
import { ChooserOpenner } from '../../assets/icons/ChooserOpenner';

interface IChooserProps {
  chooserText: string;
  options: string[];
  onClick(option: string): void;
  state: string;
}

export const Chooser = ({
  chooserText,
  options,
  onClick,
  state,
}: IChooserProps) => {
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
