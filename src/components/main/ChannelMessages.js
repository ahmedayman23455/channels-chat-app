import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { auth, db } from '../../firebase/firebase';
import firebase from 'firebase';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChannelMessages() {
  const channelId = useParams().channelId;
  const [messageValue, setMessageValue] = useState('');
  const chatBottomRef = useRef();
  const [user] = useAuthState(auth);

  /* -------------------------- send Message Function ------------------------- */
  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection('messages').add({
      message: messageValue,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: user.displayName,
      userPhoto: user.photoURL,
    });

    setMessageValue('');

    chatBottomRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  /* ------------------ get the information for only one doc ------------------ */
  const [channelDetails] = useDocument(
    db.collection('channels').doc(channelId)
  );

  const channelName = channelDetails?.data().channelName;
  /* ---------------------- get the messages for one doc ---------------------- */
  const [channelMessages, loading] = useCollection(
    db
      .collection('channels')
      .doc(channelId)
      .collection('messages')
      .orderBy('timeStamp')
  );
  /* ---------------------- messages smooth scroll effect --------------------- */
  useEffect(() => {
    chatBottomRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [loading]);

  const messages = channelMessages?.docs.map((doc) => {
    const id = doc.id;
    const { name, message, userPhoto, timeStamp } = doc.data();
    return (
      <ChatMessage
        key={id}
        id={id}
        name={name}
        userPhoto={userPhoto}
        message={message}
        timeStamp={timeStamp}
      />
    );
  });

  return (
    <ChannelMessagesContainer>
      <h2># {channelName}</h2>
      <MessagesContainer>
        {messages}
        <ChatBottom ref={chatBottomRef} />
      </MessagesContainer>

      <ChannelMessagesInput onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Write a message..."
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <IconButton type="submit">
          <SendIcon />
        </IconButton>
      </ChannelMessagesInput>
    </ChannelMessagesContainer>
  );
}

export default ChannelMessages;

const ChannelMessagesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > h2 {
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme.chatHeaderBackground};
    padding-left: 1.05em;
    padding: 0.6em;
    border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  /* hide scrollbar for chrome , safari , opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* hide scrollbar for IE , Edge , Firefox */
  & {
    -ms-overflow-style: none; /* IE and edge */
    scrollbar-width: none; /* firefox */
  }
`;

const ChannelMessagesInput = styled.form`
  margin-top: auto;
  margin-bottom: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.chatHeaderBackground};
  padding: 0 1em;

  > input {
    padding: 0.455em 0.57em;
    font-family: inherit;
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius: 8px;
    width: 50%;
    max-width: 100%;
    outline: none;
    font-size: 1rem;
    background-color: ${(props) => props.theme.searchBackground};
    color: ${(props) => props.theme.inputColor};
    margin-right: 0.4em;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 40em) {
    justify-content: flex-start;
    > input {
      flex: 1;
    }
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 100px;
`;
