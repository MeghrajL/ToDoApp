import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TodoNavigator} from './TodoNavigator';

export const Navigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <TodoNavigator />
    </NavigationContainer>
  );
};
