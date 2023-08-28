export interface ITodoList {
  id: string;
  title: string;
  desc: string;
}

export interface IInitialState {
  todoList: ITodoList[] | [];
}
