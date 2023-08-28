import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Task: {id: string} | undefined;
};

export type TaskScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Task'
>;

export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
