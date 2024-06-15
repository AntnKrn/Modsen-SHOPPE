import React, { useEffect, useState } from 'react';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import { ImgSlider, ImgSliderButton, ImgWrapper } from './Carousel.styled';

export const Carousel = () => {
  const imagesUrls: string[] = [img1, img2, img3];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setImageIndex((index) => {
        if (index === imagesUrls.length - 1) return 0;
        return index + 1;
      });
    }, 4000);

    return () => clearInterval(toggle);
  });

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imagesUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imagesUrls.length - 1;
      return index - 1;
    });
  };

  return (
    <ImgWrapper>
      <ImgSlider src={imagesUrls[imageIndex]} alt="" />
      <ImgSliderButton onClick={showPrevImage} style={{ left: 0 }}>
        &lt;
      </ImgSliderButton>
      <ImgSliderButton onClick={showNextImage} style={{ right: 0 }}>
        &gt;
      </ImgSliderButton>
    </ImgWrapper>
  );
};
