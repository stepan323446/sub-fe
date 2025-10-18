import React from "react";
import {
  StyledLogoutAction,
  StyledNavHeader,
  StyledNavLink,
} from "./MenuContent.styles";
import { useNavigate } from "react-router";
import { settingsNavSections } from "../../constants/settingsNavSections";
import { useAuthContext } from "@/entities/User";

export const MenuContent = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const logoutAction = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {settingsNavSections.map((section, index) => (
        <React.Fragment key={index}>
          <StyledNavHeader key={index}>{section.title}</StyledNavHeader>
          {section.links.map((link, index) => (
            <React.Fragment key={index}>
              <StyledNavLink to={link.to}>{link.content}</StyledNavLink>
            </React.Fragment>
          ))}

          {section.title === "Account" && (
            <StyledLogoutAction onClick={() => logoutAction()}>
              Logout
            </StyledLogoutAction>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
export default MenuContent;
