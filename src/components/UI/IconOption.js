import React from 'react';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

function IconOption({ Icon, className, toggleDarkmode, toggleShowChannels }) {
  let buttonClickHandler;
  console.log(toggleShowChannels, 'iconOption.js');
  if (toggleDarkmode) {
    buttonClickHandler = toggleDarkmode;
  } else if (toggleShowChannels) {
    buttonClickHandler = toggleShowChannels;
  }
  const iconButton = (
    <IconButton onClick={buttonClickHandler}>
      <Icon />
    </IconButton>
  );
  return (
    <IconOptionContainer className={className}>
      {iconButton}
    </IconOptionContainer>
  );
}

export default IconOption;

const IconOptionContainer = styled.div`
  &.channelsMenu {
  }
`;

//
//
