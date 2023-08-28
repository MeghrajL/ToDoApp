import {Alert, View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './Home.style';
import {ListItem} from '../../components/ListItem';
import {deleteTask} from '../../redux/taskSlice';
import {FloatingButton} from '../../components/FloatingButton';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {HomeScreenNavigationProp} from '../../navigation/type';
import {ITodoList} from '../../redux/type';

const Home = ({navigation}: HomeScreenNavigationProp) => {
  // const todos = useSelector(state => state.tasks);
  const todos = useAppSelector(state => state.tasks.todoList);
  const dispatch = useAppDispatch();

  // console.log(todos);

  function navigateToTaskScreen() {
    navigation.navigate('Task');
  }

  function onEditTask(id: string) {
    navigation.navigate('Task', {id});
  }

  function onDeletePress(id: string) {
    Alert.alert('Do you really want to delete the task?', '', [
      {
        text: 'Cancel',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'Confirm', onPress: () => onDeleteTask(id)},
    ]);
  }

  function onDeleteTask(id: string) {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          renderItem={({item}: {item: ITodoList}) => (
            <ListItem
              item={item}
              onEditTask={() => onEditTask(item.id)}
              onDeletePress={() => onDeletePress(item.id)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.addTask}>
        <FloatingButton navigateToTaskScreen={navigateToTaskScreen} />
      </View>
    </View>
  );
};

export default Home;
