import React from 'react';
import styled from 'styled-components';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconOption from '../UI/IconOption';
import GroupsIcon from '@mui/icons-material/Groups';
import Avatar from '@mui/material/Avatar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';

function Header({ toggleDarkmode, toggleShowChannels }) {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const darkmode = JSON.parse(localStorage.getItem('darkMode'));

  console.log(toggleShowChannels, 'header.js');
  const signOutHandler = () => {
    auth
      .signOut()
      .then(() => {
        history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <InsertCommentIcon />
        <h2>Messaging</h2>
      </HeaderLeft>

      <HeaderRight>
        <HeaderSearch>
          <input type="text" placeholder="Search" />
          <IconOption Icon={SearchIcon} />
        </HeaderSearch>
        <IconOption
          Icon={GroupsIcon}
          className="channelsMenu"
          toggleShowChannels={toggleShowChannels}
        />
        <IconOption Icon={SearchIcon} className="searchIcon" />
        <IconOption Icon={NotificationsIcon} />
        {!darkmode && (
          <IconOption Icon={DarkModeIcon} toggleDarkmode={toggleDarkmode} />
        )}
        {darkmode && (
          <IconOption Icon={LightModeIcon} toggleDarkmode={toggleDarkmode} />
        )}

        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={signOutHandler}
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1em;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  background-color: ${(props) => props.theme.headerBackground};

  .MuiButtonBase-root {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.iconHeaderColor};
    border-radius: 10px;

    @media (hover) {
      &:hover {
        background-color: ${(props) => props.theme.hoverIcon};
        color: ${(props) => props.theme.primary};
      }
    }
  }

  @media (min-width: 40em) {
    .searchIcon {
      display: none;
    }
    .channelsMenu {
      display: none;
    }
  }

  @media (max-width: 40em) {
    flex-direction: column;
    align-items: center;
    & > * + * {
      margin-top: 1em;
    }
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    color: ${({ theme }) => theme.primary};
  }
  > h2 {
    margin-left: 0.5em;
    font-size: 1rem;

    @media (min-width: 40em) {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 40em) {
    order: 9;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.3em;
  }
  @media (max-width: 40em) {
    order: 999;
  }
`;

const HeaderSearch = styled.div`
  width: 200px;
  max-width: 200px;
  display: none;
  border-radius: 10px;
  overflow: hidden;
  padding: 0 0.8em;
  background-color: #f9f9f9;
  background-color: ${(props) => props.theme.searchBackground};
  @media (min-width: 40em) {
    display: flex;
    align-items: center;
  }
  > input {
    height: 100%;
    flex: 1;
    padding: 0.75em 0.5em;
    font-family: inherit;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    color: ${(props) => props.theme.inputColor};
  }

  > .MuiButtonBase-root {
    color: ${({ theme }) => theme.iconColor};
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  width: 35px !important;
  height: 35px !important;

  :hover {
    opacity: 0.8;
  }
`;
