import {
  Alert,
  View,
  FlatList,
  Modal,
  Pressable,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Home.style';
import {ListItem} from '../../components/ListItem';
import {deleteTask} from '../../redux/taskSlice';
import {FloatingButton} from '../../components/FloatingButton';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {HomeScreenNavigationProp} from '../../navigation/type';
import {ITodoList} from '../../redux/type';
import {Touchable} from 'react-native';

const Home = ({navigation}: HomeScreenNavigationProp) => {
  // const todos = useSelector(state => state.tasks);
  const todos = useAppSelector(state => state.tasks.todoList);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [itemId, setItemId] = useState('');
  // console.log(todos);

  function navigateToTaskScreen() {
    navigation.navigate('Task');
  }

  function onEditTask(id: string) {
    navigation.navigate('Task', {id});
  }

  function deleteHandle(id: string) {
    setModalVisible(!modalVisible);
    onDeleteTask(id);
  }

  function modalPopUp() {
    return (
      // <View style={{height: '100%'}}>
      // <View
      //   style={{backgroundColor: 'yellow', flex: 1, justifyContent: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to delete task?</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCnfrm]}
                onPress={() => deleteHandle(itemId)}>
                <Text style={styles.textStyle}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      // </View>
      // </View>
    );
  }

  function onDeletePress(id: string) {
    setItemId(id);
    setModalVisible(true);
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
      {modalVisible && modalPopUp()}
      {todos.length < 1 ? (
        <>
          <View style={styles.emptyTasksScreenContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../../../assets/images/addnotes.png')}
            />

            <Text style={styles.initialTextStyle}>
              Create tasks now & become productive!
            </Text>
          </View>
        </>
      ) : (
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
      )}

      <FloatingButton navigateToTaskScreen={navigateToTaskScreen} />
    </View>
  );
};

export default Home;
