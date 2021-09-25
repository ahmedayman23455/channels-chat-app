import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

function ChatMessage({ id, message, name, userPhoto, timeStamp }) {
  const editTimestamp = new Date(timeStamp?.toDate()).toUTCString();

  return (
    <ChatMessageContainer>
      <ChatMessageImg>
        <Avatar src={userPhoto}></Avatar>
      </ChatMessageImg>

      <ChatMessageContent>
        <ContentHeader>
          <h5> {name}</h5>
          <p>{editTimestamp}</p>
        </ContentHeader>

        <ContentMessage>{message}</ContentMessage>
      </ChatMessageContent>
    </ChatMessageContainer>
  );
}
export default ChatMessage;

const ChatMessageContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.messageBackground};
  color: ${(props) => props.theme.messageColor};
  padding: 0.7em;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  & > * + * {
    margin-left: 1em;
  }
  font-size: 1.1rem;
`;

const ChatMessageImg = styled.div`
  border-radius: 100vh;
  overflow: hidden;
  /* height: 30px;
  width: 30px; */
`;

const ChatMessageContent = styled.div`
  flex: 1;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.3em;
  font-size: 1.2rem;
  font-weight: bold;

  > h5 {
    color: ${(props) => props.theme.personName};
  }
  & > * + * {
    margin-left: 1em;
  }

  > p {
    font-size: 0.65rem;
    font-weight: bold;
    color: ${(props) => props.theme.personName};
  }

  @media (max-width: 40em) {
    flex-direction: column;

    > p {
      margin: 0;
      margin-top: 0.3em;
    }
  }
`;
const ContentMessage = styled.p`
  font-size: 1rem;
`;
