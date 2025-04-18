import React from 'react';
import { RootNavigation } from './src/navigation/rootNavigation';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
         <RootNavigation/>
    </PaperProvider>
  );
};
