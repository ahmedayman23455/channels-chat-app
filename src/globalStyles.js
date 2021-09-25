import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {   
        background-color: ${({ theme }) => theme.body}; 
        color: ${({ theme }) => theme.text};   
    } 
`;

export const lightTheme = {
  body: '#fff',
  text: '#2d3035',
  primary: '#6749cd',
  headerBackground: '#fff',
  channelsBackground: '#fff',
  iconColor: '#9da9b7',
  hoverIcon: '#edecfa',
  borderColor: '#ececec',
  messageBackground: '#f6f7fb',
  messageColor: ' #4e555f;',
  channelHover: '#edecfa',
  addChannelColor: '#6749cd',
  chatHeaderBackground: '#fff',
  addChannelText: '#2d3035',
  personName: '#7b5cc1',
};

export const darkTheme = {
  body: '#141420',
  text: '#fff',
  primary: '#6749cd',
  headerBackground: '#141420',
  channelsBackground: '#141420',
  iconHeaderColor: '#fff',
  iconColor: '#524d64',
  hoverIcon: '#1d1335',
  borderColor: '#1f1b2b',
  searchBackground: '#1f1b2c',
  inputColor: '#fff',
  channelColor: '#b1a9ca',
  channelHover: '#19182a',
  addChannelColor: '#6749cd',
  chatHeaderBackground: 'inherit',
  messageBackground: '#19182a',
  messageColor: '#fff',
  addChannelText: '#524b65',
  closeAddChannelColor: '#f3f3f3',
  innerLogin: '#5454771c',

  personName: '#7b5cc1',
};
