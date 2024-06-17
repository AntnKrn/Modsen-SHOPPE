import React, { useEffect, useRef, useState } from 'react';
import {
  PriceInput,
  PriceInputWrapper,
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
      if (maxPrice - minPrice <= 50) {
        setMinPrice(maxPrice - 51);
        setMaxPrice(minPrice + 51);
      }
    }
  }, [maxPrice, minPrice]);

  const changePricer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    console.log(e.target.value);

    if (maxPrice - minPrice > 50) {
      ref.current.style.left = (minPrice / 180) * 100 + '%';
      ref.current.style.right = 100 - (maxPrice / 180) * 100 + '%';
    }
    if (e.target.classList[2] == 'min') {
      setMinPrice(Number(value));
    }
    if (e.target.classList[2] == 'max') {
      setMaxPrice(Number(value));
    }
    /* if (value < maxPrice && value > minPrice && maxPrice - minPrice == 50) {
      setMinPrice(maxPrice - 50);
      setMaxPrice(minPrice + 50);
      return;
    } */
  };

  return (
    <PriceWrapper>
      <PriceInputWrapper>
        <div ref={ref} id="price-progress" />

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
        <TextInsidePriceInput>Price: $40 - $180</TextInsidePriceInput>
        <TextInsidePriceInput>Filter</TextInsidePriceInput>
      </UnderFilterText>
    </PriceWrapper>
  );
};
