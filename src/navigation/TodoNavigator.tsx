import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Task} from '../screens';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from './type';
// import {TodoStackParamList} from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TodoNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        // options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
};
