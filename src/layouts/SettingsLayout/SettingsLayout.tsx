import React from "react";
import { Container, Grid, GridItem, Panel, PanelWrapper } from "@/shared/ui";
import { Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import {
  StyledLogoutAction,
  StyledNavHeader,
  StyledNavLink,
} from "./SettingsLayout.styles";
import { settingsNavSections } from "./constants/settingsNavSections";
import { useAuthContext } from "@/entities/User";

const SettingsLayout = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const logoutAction = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container>
      <Typography typography="h1">Settings</Typography>
      <Grid gap={25} cols={{ default: "300px 1fr" }}>
        <GridItem>
          <Panel>
            <PanelWrapper>
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
            </PanelWrapper>
          </Panel>
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default SettingsLayout;
