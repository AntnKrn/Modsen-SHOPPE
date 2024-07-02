import { ReactElement } from 'react';

import { paths } from '../../constants/paths';

import { CartSvg, ProfileSvg, SearchSvg } from './index.styled';
import { Switcher } from './Switch';

export interface ILink {
  id: number;
  element: string | ReactElement;
  link?: string;
  marginLeft?: number;
}

export const links: ILink[] = [
  { id: 1, element: '' },
  { id: 2, element: 'Home', link: paths.main, marginLeft: 0 },
  { id: 3, element: 'Shop', link: paths.shop, marginLeft: 0 },
  { id: 4, element: 'Shop', link: paths.shop },
  { id: 5, element: '|', marginLeft: 48 },
  { id: 6, element: 'About', link: paths.about },
  { id: 7, element: <Switcher />, marginLeft: 14 },
  { id: 8, element: 'Authorization', link: paths.authorization },
  { id: 9, element: <SearchSvg />, marginLeft: 41 },
  { id: 10, element: 'Blog', link: paths.blog },
  { id: 11, element: <CartSvg />, link: paths.cart, marginLeft: 43 },
  { id: 12, element: 'Help', link: paths.help },
  {
    id: 13,
    element: <ProfileSvg />,
    link: paths.authorization,
    marginLeft: 43,
  },
  { id: 14, element: 'Contact', link: paths.contact, marginLeft: 0 },
  { id: 15, element: '' },
  { id: 16, element: 'Search', link: paths.search },
];
