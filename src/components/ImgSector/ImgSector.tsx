import React from 'react';
import noimage from '../../assets/noimg.jpg';
import { ImgSectorContainer, ImgSectorItem } from './ImgSector.styled';

export const ImgSector = () => {
  return (
    <ImgSectorContainer>
      <ImgSectorItem src={noimage} />
      <ImgSectorItem src={noimage} />
      <ImgSectorItem src={noimage} />
      <ImgSectorItem src={noimage} />
      <ImgSectorItem src={noimage} />
    </ImgSectorContainer>
  );
};
