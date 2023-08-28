import {TextInput, View, Alert} from 'react-native';
import {styles} from './Task.style';
import React, {useEffect, useState} from 'react';
import {addTask, updateTask} from '../../redux/taskSlice';
import SubmitButton from '../../components/SubmitButton';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {TaskScreenNavigationProp} from '../../navigation/type';

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

  function onSubmitPress() {
    // console.log(title);
    if (title.trim().length === 0) {
      Alert.alert('You need to enter a task');
      setTitle('');
      return;
    }

    dispatch(
      addTask({
        title: title,
        desc: desc,
      }),
    );
    setTitle('');
    setDesc('');
  }

  function onUpdateTask() {
    console.log('upadting', title);
    dispatch(
      updateTask({
        id: id,
        title: title,
        desc: desc,
      }),
    );
    navigation.navigate('Home');
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <TextInput
          placeholder="Add Task"
          onChangeText={text => setTitle(text)}
          value={title}
          style={styles.titleStyle}
          maxLength={15}
          placeholderTextColor="#828282"
          autoCorrect={false}
        />
      </View>
      <TextInput
        placeholder="Add Description"
        onChangeText={text => setDesc(text)}
        value={desc}
        style={styles.descStyle}
        maxLength={50}
        multiline={true}
        textAlignVertical="top"
        placeholderTextColor="#828282"
        autoCorrect={false}
      />

      <SubmitButton
        onPressCustom={id === undefined ? onSubmitPress : onUpdateTask}
        submitBtnText={id === undefined ? 'Add Task' : 'Edit Task'}
      />
    </View>
  );
};

export default Task;
