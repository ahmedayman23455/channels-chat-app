import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function ChannelOption({ id, channelName }) {
  console.log(id);

  return (
    <ChannelOptionContainer>
      <NavLink activeClassName="activeChannelOption" to={`/channels/${id}`}>
        <span>#</span> {channelName}
      </NavLink>
    </ChannelOptionContainer>
  );
}

export default ChannelOption;

const ChannelOptionContainer = styled.div`
  cursor: pointer;
  margin-bottom: 0.4em;

  a {
    color: inherit;
    color: ${(props) => props.theme.channelColor};
    text-decoration: none;
    font-size: 1.1rem;
    display: block;
    width: 100%;
    padding: 0.4em;
    border-radius: 5px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.channelHover};
    color: ${({ theme }) => theme.primary};
  }
`;
