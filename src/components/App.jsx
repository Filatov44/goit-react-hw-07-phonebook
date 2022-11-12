import React from 'react';
import Phonebook from './Phonebook/Phonebook';
import { StyledAppWrapper } from 'App.styled';

export const App = () => {
  return (
    <StyledAppWrapper>
      <Phonebook />
    </StyledAppWrapper>
  );
};
