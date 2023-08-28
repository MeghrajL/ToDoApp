import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    backgroundColor: 'black',
  },
  listContainer: {
    // height: '90%',
    flex: 1,
  },
  addTask: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4285F4',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
