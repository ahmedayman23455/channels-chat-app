import React from 'react';
import styled from 'styled-components';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Button } from '@mui/material';
import { auth, provider } from '../../firebase/firebase';

function Login() {
  const signInHandler = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <LoginLogo>
          <InsertCommentIcon />
          <h2>Messaging</h2>
        </LoginLogo>

        <h3>Sign in to messaging app</h3>

        <Button onClick={signInHandler}>Sign in with google </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInnerContainer = styled.div`
  width: 500px;
  max-width: 95%;
  margin: 0 2.5%;
  padding: 2em 0.5em;
  @media (min-width: 40em) {
    padding: 3em;
  }
  text-align: center;
  background-color: ${(props) => props.theme.innerLogin};
  box-shadow: 0 4px 12px rgba(0 0 0 /15%);

  > h3 {
    margin: 1em 0;
  }

  .MuiButton-root {
    background-color: ${(props) => props.theme.primary};
    color: #fff;

    &:hover {
      background-color: rgba(102, 77, 188, 0.8);
      color: #fff;
    }
  }
`;

const LoginLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  > .MuiSvgIcon-root {
    font-size: 2.2rem;
    color: ${(props) => props.theme.primary};
  }

  & > * + * {
    margin-left: 10px;
  }
`;
