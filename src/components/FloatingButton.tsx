import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface FloatingButtonPropList {
  navigateToTaskScreen: (event: GestureResponderEvent) => void;
}
export const FloatingButton = ({
  navigateToTaskScreen,
}: FloatingButtonPropList) => {
  return (
    <Pressable onPress={navigateToTaskScreen}>
      <Icon name="add-outline" size={40} color={'white'} />
    </Pressable>
  );
};
