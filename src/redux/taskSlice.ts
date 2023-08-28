import {createSlice, nanoid} from '@reduxjs/toolkit';
import {IInitialState} from './type';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    todoList: [],
  } as IInitialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        desc: action.payload.desc,
      };
      state.todoList.push(newTask as never);
    },

    deleteTask: (state, action) => {
      // return state.filter(item => item.id !== action.payload.id);
      state.todoList = state.todoList.filter(
        item => item.id !== action.payload.id,
      );
    },

    updateTask: (state, action) => {
      // const {id, title, desc} = action.payload;
      // console.log(id, title, state);
      // const taskToUpdate = state.find(task => task.id === id);
      // let taskToUpdate = state.todoList.find(task => task.id === id);
      // taskToUpdate = action.payload;
      // if (taskToUpdate) {
      //   taskToUpdate.id = id;
      //   taskToUpdate.title = title;
      //   taskToUpdate.desc = desc;
      // }
      state.todoList = state.todoList.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
  },
});

export const {addTask, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;
