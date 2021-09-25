import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import IconOption from '../UI/IconOption';
function ChatMenu() {
  return (
    <ChatMenuContainer>
      <IconOption Icon={MenuIcon} />

      <ChatMenuList>
        <IconOption Icon={HomeIcon} />
        <IconOption Icon={PeopleIcon} />
        <IconOption Icon={SendIcon} />
        <IconOption Icon={DraftsIcon} />
        <IconOption Icon={MessageIcon} className="active" />
        <IconOption Icon={SettingsIcon} />
      </ChatMenuList>
    </ChatMenuContainer>
  );
}

export default ChatMenu;

const ChatMenuContainer = styled.div`
  display: none;

  @media (min-width: 40em) {
    height: 100vh;
    border-right: 2px solid ${({ theme }) => theme.borderColor};
    display: flex;
    flex-basis: 65px;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;

    &:first-child {
      padding-top: 1em;
    }

    .MuiButtonBase-root {
      border-radius: 10px;
      color: ${(props) => props.theme.iconColor};
      &:hover {
        background-color: ${(props) => props.theme.hoverIcon};
        color: ${(props) => props.theme.primary};
      }
    }

    .active .MuiButtonBase-root {
      color: ${({ theme }) => theme.primary};
      background-color: ${({ theme }) => theme.hoverIcon};
    }
  }
`;

const ChatMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: auto 0;

  > * {
    margin-bottom: 1em;
  }
`;
