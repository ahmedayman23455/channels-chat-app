import React from 'react';
import styled from 'styled-components';
import ChannelMessages from './ChannelMessages';
import Channels from './Channels';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Main({ showChannels }) {
  return (
    <Router>
      <MainContainer>
        <Channels showChannels={showChannels} />

        <div style={{ position: 'relative', flex: 1 }}>
          <Route path="/channels/:channelId">
            <ChannelMessages />
          </Route>
        </div>
      </MainContainer>
    </Router>
  );
}

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 40em) {
    flex-direction: column;
  }
`;
