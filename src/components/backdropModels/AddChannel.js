import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { db } from '../../firebase/firebase';
import firebase from 'firebase';

function AddChannel({ closeModelF }) {
  const [inputValue, setInputValue] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    db.collection('channels').add({
      channelName: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    closeModelF();
    setInputValue('');
  };

  return (
    <AddChannelContainer onClick={(e) => e.stopPropagation()}>
      <AddChannelHeader>
        <h2>Create a channel</h2>
        <IconButton onClick={() => closeModelF()}>
          <CloseIcon />
        </IconButton>
      </AddChannelHeader>

      <AddChannelParagraph>
        Channels are where your team communicates. They’re best when organized
        around a topic — #marketing, for example.
      </AddChannelParagraph>

      <AddChannelForm onSubmit={submitHandler}>
        <label htmlFor="">Channel Name</label>
        <AddChannelInput>
          <span>#</span>
          <input
            type="text"
            placeholder="Channel name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
        </AddChannelInput>

        <AddChannelButton type="submit">Create</AddChannelButton>
      </AddChannelForm>
    </AddChannelContainer>
  );
}

export default AddChannel;

const AddChannelContainer = styled.div`
  max-width: 95%;
  margin: auto;
  background-color: #fff;
  color: ${(props) => props.theme.addChannelText};
  padding: 1.1em;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 40em) {
    max-width: 40%;
  }
`;

const AddChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .MuiButtonBase-root {
    border-radius: 10px;
    color: ${(props) => props.theme.iconColor};
    @media (hover) {
      &:hover {
        background-color: ${(props) => props.theme.closeAddChannelColor};
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;

const AddChannelParagraph = styled.p`
  font-size: 0.9rem;
  margin-top: 0.75em;
  margin-bottom: 0.95em;
`;

const AddChannelForm = styled.form`
  display: flex;
  flex-direction: column;
  > label {
    font-size: 0.95rem;
    font-weight: bold;
  }
`;

const AddChannelInput = styled.div`
  display: flex;
  background-color: gray;
  background-color: #f0f0f08c;
  margin: 0.4em 0;
  margin-bottom: 1em;
  padding-right: 0.45em;

  > span {
    font-size: 1.1rem;
    padding: 0.7em;
    color: ${({ theme }) => theme.iconColor};
  }
  > .MuiButtonBase-root {
    font-size: 1rem;
  }

  > input {
    flex: 1;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: inherit;
  }
`;

const AddChannelButton = styled.button`
  background: none;
  padding: 0.8em 1em;
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  cursor: pointer;
  letter-spacing: 0.9px;
  margin-left: auto;

  &:hover {
    opacity: 0.9;
  }
`;
