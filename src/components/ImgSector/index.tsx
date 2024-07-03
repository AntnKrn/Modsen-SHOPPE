import React, { useEffect, useState } from 'react';

import { ImgSectorContainer, ImgSectorItem } from './index.styled';
import { imgSectorProps } from './types';

export const ImgSector = ({ imgUrl }: imgSectorProps) => {
  const [imgsArray, setImgsArray] = useState([]);

  useEffect(() => {
    const arrayOfImages = [];

    for (let i = 0; i < 5; i++) {
      arrayOfImages.push(imgUrl);
    }
    setImgsArray(arrayOfImages);
  }, []);

  return (
    <ImgSectorContainer>
      {imgsArray.map((img, index) => (
        <ImgSectorItem key={index} src={img} />
      ))}
    </ImgSectorContainer>
  );
};
