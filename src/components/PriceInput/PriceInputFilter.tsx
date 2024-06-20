import React, { useEffect, useRef, useState } from 'react';
import {
  BackGroundProgressInput,
  PriceInput,
  PriceInputWrapper,
  PriceProgress,
  PriceWrapper,
  TextInsidePriceInput,
  UnderFilterText,
} from './PriceInputFilter.styled';

export const PriceInputFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(180);
  const minRef = useRef<HTMLInputElement>();
  const maxRef = useRef<HTMLInputElement>();
  const ref = useRef<HTMLDivElement>();
  console.log(minPrice, 'min');
  console.log(maxPrice, 'max');
  useEffect(() => {
    if (minPrice >= 0 && maxPrice <= 180) {
      if (maxPrice - minPrice <= 2) {
        setMinPrice(maxPrice - 2);
        setMaxPrice(minPrice + 2);
      }
    }
  }, [maxPrice, minPrice]);

  const changePricer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    console.log(e.target.value);

    if (maxPrice - minPrice > 2) {
      ref.current.style.left = (minPrice / 180) * 100 + 1 + '%';
      ref.current.style.right = 100 - (maxPrice / 180) * 100 + 1 + '%';
    }
    if (e.target.classList[2] == 'min') {
      setMinPrice(Number(value));
    }
    if (e.target.classList[2] == 'max') {
      setMaxPrice(Number(value));
    }
  };

  return (
    <PriceWrapper>
      <PriceInputWrapper>
        <BackGroundProgressInput />
        <PriceProgress ref={ref} />
        <PriceInput
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="180"
          step="1"
          value={minPrice}
          ref={minRef}
          onChange={changePricer}
          className="min"
        />
        <PriceInput
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="180"
          step="1"
          value={maxPrice}
          ref={maxRef}
          onChange={changePricer}
          className="max"
        />
      </PriceInputWrapper>
      <UnderFilterText>
        <TextInsidePriceInput>
          Price: ${minPrice} - ${maxPrice}
        </TextInsidePriceInput>
        <TextInsidePriceInput>Filter</TextInsidePriceInput>
      </UnderFilterText>
    </PriceWrapper>
  );
};
