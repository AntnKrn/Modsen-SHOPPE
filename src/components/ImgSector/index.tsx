import React from 'react';
import { ImgSectorContainer, ImgSectorItem } from './index.styled';
interface IImgSectorProps {
  imgUrl: string;
}
export const ImgSector = ({ imgUrl }: IImgSectorProps) => {
  return (
    <ImgSectorContainer>
      <ImgSectorItem src={imgUrl} />
      <ImgSectorItem src={imgUrl} />
      <ImgSectorItem src={imgUrl} />
      <ImgSectorItem src={imgUrl} />
      <ImgSectorItem src={imgUrl} />
    </ImgSectorContainer>
  );
};
