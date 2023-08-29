import { createSlice } from "@reduxjs/toolkit";

const getInitialTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
const getInitialHideDoneState = () =>
  JSON.parse(localStorage.getItem("hideDone")) || false;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getInitialTasks(),
    hideDone: getInitialHideDoneState(),
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks.splice(index, 1);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => (task.done = true));
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
