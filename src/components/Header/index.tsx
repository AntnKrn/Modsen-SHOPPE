import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cart from '../../assets/icons/socialMedia/svg/cart.svg';
import { paths } from '../../constants/paths';
import { SearchInput } from '../SearchInput';

import {
  CloseMobileMenuSvg,
  List,
  ListItem,
  LogoText,
  MobileMenuSvg,
  MobileUpperRightIcons,
  SearchInputWrapper,
  StyledHeader,
  StyledNav,
} from './index.styled';
import { ILink, links } from './links';

export const Header = () => {
  const navigate = useNavigate();
  const listRef = useRef<HTMLUListElement>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClickMobileMenuHandler = () => {
    setIsMobileMenuOpen((prev) => !prev);
    listRef.current.style.display = isMobileMenuOpen ? 'none' : 'flex';
    document.getElementsByTagName('body')[0].style.overflow = isMobileMenuOpen
      ? 'unset'
      : 'hidden';
  };

  const handleClickMenu = (path: string) => {
    navigate(path);
  };
  return (
    <StyledHeader $Open={isMobileMenuOpen}>
      <LogoText onClick={() => navigate(paths.main)}>
        Modsen<LogoText>SHOPPE</LogoText>
      </LogoText>
      <MobileUpperRightIcons>
        <Cart onClick={() => navigate(paths.cart)} />
        {isMobileMenuOpen ? (
          <CloseMobileMenuSvg onClick={onClickMobileMenuHandler} />
        ) : (
          <MobileMenuSvg onClick={onClickMobileMenuHandler} />
        )}
      </MobileUpperRightIcons>

      <StyledNav>
        <List ref={listRef}>
          {links.map((item: ILink) => (
            <ListItem
              key={item.id}
              $MarginLeft={item?.marginLeft}
              onClick={() => handleClickMenu(item.link)}
            >
              {item.element}
            </ListItem>
          ))}
        </List>
      </StyledNav>
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
    </StyledHeader>
  );
};
