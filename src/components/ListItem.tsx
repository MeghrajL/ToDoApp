import {Text, View, GestureResponderEvent, StyleSheet} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import {ITodoList} from '../redux/type';

interface IListItemPropsList {
  item: ITodoList;
  onEditTask: (event: GestureResponderEvent) => void;
  onDeletePress: (event: GestureResponderEvent) => void;
}

export const ListItem = ({
  item,
  onEditTask,
  onDeletePress,
}: IListItemPropsList) => {
  return (
    <View style={styles.itemStyle}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.descStyle}>{item.desc}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          icon="pencil-sharp"
          color="#4285F4"
          onPressCustom={onEditTask}
        />
        <IconButton
          icon="trash-bin-outline"
          color="red"
          onPressCustom={onDeletePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    backgroundColor: '#2a2929',
    margin: 10,
    borderRadius: 25,
    padding: 20,
    // shadowColor: 'white',
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // shadowOffset: {width: 0, height: 1},
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
  },
  descStyle: {
    color: 'white',
    fontSize: 20,
  },
  textContainer: {
    width: '75%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'white',
    width: '25%',
  },
});
