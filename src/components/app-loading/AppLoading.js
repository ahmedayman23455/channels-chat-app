import React from 'react';
import styled from 'styled-components';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import Spinner from 'react-spinkit';

function AppLoading() {
  return (
    <AppLoadingContainer>
      <AppLoadingContents>
        <LoadingLogo>
          <InsertCommentIcon />
          <h2>Messaging</h2>
        </LoadingLogo>

        <Spinner name="circle" color="#6749cd" className="spinner" />
      </AppLoadingContents>
    </AppLoadingContainer>
  );
}

export default AppLoading;

const AppLoadingContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    margin-top: 2em;
    width: 40px;
    height: 40px;
  }
`;

const AppLoadingContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  max-width: 95%;
  margin: 0 2.5%;
  padding: 2em 0.5em;
  @media (min-width: 40em) {
    padding: 3em;
  }
  text-align: center;
  background-color: ${(props) => props.theme.innerLogin};
  color: ${(props) => props.theme.text};
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

const LoadingLogo = styled.div`
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
