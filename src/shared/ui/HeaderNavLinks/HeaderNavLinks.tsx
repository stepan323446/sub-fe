import type { ComponentProps } from "react";
import { StyledLinkContainer, StyledNavLink } from "./HeaderNavLinks.styles";
import type { NavLink } from "react-router";

type CustomNavLink = ComponentProps<typeof NavLink>;

interface HeaderNavLinksProps {
  links: CustomNavLink[];
  isVertical?: boolean;
  onClickItem?: () => void;
}

const HeaderNavLinks = ({
  links,
  onClickItem,
  isVertical = false,
}: HeaderNavLinksProps) => {
  return (
    <StyledLinkContainer isVertical={isVertical}>
      {links.map((link, index) => (
        <StyledNavLink {...link} key={index} onClick={onClickItem} end>
          {link.children}
        </StyledNavLink>
      ))}
    </StyledLinkContainer>
  );
};

export default HeaderNavLinks;
