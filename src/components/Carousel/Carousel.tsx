import React, { useEffect, useState } from 'react';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import {
  ButtonWrapper,
  ImgSlider,
  ImgSliderButton,
  ImgWrapper,
} from './Carousel.styled';

export const Carousel = () => {
  const imagesUrls: string[] = [img1, img2, img3, img4, img5];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imgSliderButton = document.getElementsByClassName(
      `img${imageIndex + 1}`,
    )[0];

    const toggle = setInterval(() => {
      setImageIndex((index) => {
        if (imgSliderButton) {
          imgSliderButton.classList.remove('active');
        }
        if (index === imagesUrls.length - 1) return 0;
        return index + 1;
      });
    }, 4000);

    if (imgSliderButton) {
      imgSliderButton.classList.add('active');
    }
    return () => clearInterval(toggle);
  });

  return (
    <ImgWrapper>
      <ImgSlider src={imagesUrls[imageIndex]} alt="" />
      <ButtonWrapper>
        {imagesUrls.map((img, index) => (
          <ImgSliderButton
            onClick={() => setImageIndex(index)}
            key={img}
            $number={index}
            className={`img${index + 1} ${index === 0 ? 'active' : 0}`}
          />
        ))}
      </ButtonWrapper>
    </ImgWrapper>
  );
};
