import React, { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { Backdrop, IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';
import AddChannel from '../backdropModels/AddChannel';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/firebase';
import ChannelOption from '../UI/ChannelOption';

function Channels({ showChannels }) {
  console.log(showChannels, 'channels.js');
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [snapshot] = useCollection(
    db.collection('channels').orderBy('timestamp', 'desc')
  );

  const channels = snapshot?.docs.map((doc) => {
    return (
      <ChannelOption
        key={doc.id}
        id={doc.id}
        channelName={doc.data().channelName}
      />
    );
  });

  const closeBackdropHandler = () => {
    setOpenBackdrop(false);
  };
  const openBackdropHandler = () => {
    setOpenBackdrop(true);
  };
  return (
    <ChannelsContainer className={showChannels ? 'active' : ''}>
      {/* channel header */}
      <ChannelsHeader>
        <h4>Channels</h4>

        <Tooltip title="Add channel">
          <IconButton onClick={() => openBackdropHandler()}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </ChannelsHeader>

      {/* channels */}

      {channels}

      {/* backdrop */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={closeBackdropHandler}
      >
        <AddChannel closeModelF={closeBackdropHandler} />
      </Backdrop>
    </ChannelsContainer>
  );
}

export default Channels;

const ChannelsContainer = styled.div`
  flex: 0.2;
  border-right: 2px solid ${({ theme }) => theme.borderColor};
  overflow: auto;
  background-color: ${(props) => props.theme.channelsBackground};

  .MuiButtonBase-root {
    border-radius: 10px;
    color: ${(props) => props.theme.addChannelColor};
    &:hover {
      background-color: ${(props) => props.theme.hoverIcon};
      color: ${(props) => props.theme.primary};
    }
  }

  /* hide scrollbar for chrome , safari , opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* hide scrollbar for IE , Edge , Firefox */
  & {
    -ms-overflow-style: none; /* IE and edge */
    scrollbar-width: none; /* firefox */
  }

  @media (max-width: 40em) {
    flex: 0.4;
    display: none;
    &.active {
      display: block;
    }
  }
`;

const ChannelsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  position: sticky;
  padding: 0.3em;
  top: 0;
  background-color: inherit;

  .MuiButtonBase-root {
    width: 35px;
    height: 35px;
  }
`;
