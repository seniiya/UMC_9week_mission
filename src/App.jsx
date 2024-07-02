// src/App.js
import React from 'react';
import Playlist from './components/Playlist';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Playlist />
    </AppContainer>
  );
};

export default App;