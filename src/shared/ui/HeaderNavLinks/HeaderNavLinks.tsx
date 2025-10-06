import type { ComponentProps } from "react";
import { StyledLinkContainer, StyledNavLink } from "./HeaderNavLinks.styles";
import type { NavLink } from "react-router";

type CustomNavLink = ComponentProps<typeof NavLink>;

interface HeaderNavLinksProps {
  links: CustomNavLink[];
}

const HeaderNavLinks = ({ links }: HeaderNavLinksProps) => {
  return (
    <StyledLinkContainer>
      {links.map((link, index) => (
        <StyledNavLink {...link} key={index}>
          {link.children}
        </StyledNavLink>
      ))}
    </StyledLinkContainer>
  );
};

export default HeaderNavLinks;
