import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './globalStyles';
import './App.css';
import useDarkmode from './darkTheme/useDarkmode';
import styled from 'styled-components';
import ChatMenu from './components/menu/ChatMenu';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/login/Login';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import AppLoading from './components/app-loading/AppLoading';

function App() {
  const [darkMode, toggleDarkmode] = useDarkmode();
  const [showChannels, setShowChannels] = useState(false);

  const [user, loading] = useAuthState(auth);

  const toggleShowChannels = () => {
    setShowChannels((prevState) => !prevState);
  };

  const activeTheme = darkMode ? darkTheme : lightTheme;

  if (loading) {
    return (
      <ThemeProvider theme={activeTheme}>
        <AppLoading />
      </ThemeProvider>
    );
  }
  return (
    <Router>
      <ThemeProvider theme={activeTheme}>
        <Route path="/">
          {!user ? (
            <Login />
          ) : (
            <Container>
              <ChatMenu />
              <AppBody>
                <Header
                  toggleDarkmode={toggleDarkmode}
                  toggleShowChannels={toggleShowChannels}
                />

                <Main showChannels={showChannels} />
              </AppBody>
            </Container>
          )}
          <GlobalStyles />
        </Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

const AppBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
