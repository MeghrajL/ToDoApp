import {TextInput, View, Alert, KeyboardAvoidingView} from 'react-native';
import {styles} from './Task.style';
import React, {useEffect, useState} from 'react';
import {addTask, updateTask} from '../../redux/taskSlice';
import SubmitButton from '../../components/SubmitButton';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {TaskScreenNavigationProp} from '../../navigation/type';
import Toast from 'react-native-simple-toast';
const Task = ({route, navigation}: TaskScreenNavigationProp) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useAppDispatch();
  const id = route.params?.id;

  const prevTask = useAppSelector(state =>
    // state.tasks.find((task: {id: string}) => task.id === id),
    state.tasks.todoList.find((task: {id: string}) => task.id === id),
  );

  //   console.log(id, prevTask);

  useEffect(() => {
    if (id !== undefined && prevTask) {
      setTitle(prevTask.title);
      setDesc(prevTask.desc);
    }
  }, []);

  function validateTitle() {
    if (title.trim().length === 0) {
      Alert.alert('You need to enter a task');
      setTitle('');
      return false;
    }
    return true;
  }

  function onSubmitPress() {
    // console.log(title);
    if (validateTitle()) {
      dispatch(
        addTask({
          title: title,
          desc: desc,
        }),
      );
      setTitle('');
      setDesc('');
      Toast.show('Task Added', Toast.SHORT);
    }
  }

  function onUpdateTask() {
    console.log('upadting', title);
    if (validateTitle()) {
      validateTitle();
      dispatch(
        updateTask({
          id: id,
          title: title,
          desc: desc,
        }),
      );
      navigation.navigate('Home');
      Toast.show('Task Edited', Toast.SHORT);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.rootContainer}>
      <TextInput
        placeholder="Add Task"
        onChangeText={text => setTitle(text)}
        value={title}
        style={styles.titleStyle}
        maxLength={15}
        placeholderTextColor="#828282"
        autoCorrect={false}
      />

      <TextInput
        placeholder="Add Description"
        onChangeText={text => setDesc(text)}
        value={desc}
        style={styles.descStyle}
        maxLength={100}
        multiline={true}
        textAlignVertical="top"
        placeholderTextColor="#828282"
        autoCorrect={false}
        // numberOfLines={5}
      />

      <SubmitButton
        onPressCustom={id === undefined ? onSubmitPress : onUpdateTask}
        submitBtnText={id === undefined ? 'Add Task' : 'Edit Task'}
      />
    </KeyboardAvoidingView>
  );
};

export default Task;
