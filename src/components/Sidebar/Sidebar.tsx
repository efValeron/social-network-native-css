import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {MessagesIcon, MusicIcon, NewsIcon, SettingsIcon, UserIcon} from "../../icons.tsx";
import {switches} from "../../globalVars.ts";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LinksWrapper>
        <NavLinkStyled to="/profile">{switches.sidebarIcons && <UserIcon/>}Profile</NavLinkStyled>
        <NavLinkStyled to="/messages">{switches.sidebarIcons && <MessagesIcon/>}Messages</NavLinkStyled>
        <NavLinkStyled to="/news">{switches.sidebarIcons && <NewsIcon/>}News</NavLinkStyled>
        <NavLinkStyled to="/music">{switches.sidebarIcons && <MusicIcon/>}Music</NavLinkStyled>
        <NavLinkStyled to="/settings">{switches.sidebarIcons && <SettingsIcon/>}Settings</NavLinkStyled>
      </LinksWrapper>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
`
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.text};
  border-radius: .5rem;
  padding: .5rem 1rem;
  box-sizing: border-box;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  display: flex;
  align-items: center;
  gap: .5rem;
  transition-duration: 0.1s;

  &:hover {
    background-color: ${p => p.theme.secondary};
  }

  &.active {
    background-color: ${p => p.theme.secondary};
  }


`