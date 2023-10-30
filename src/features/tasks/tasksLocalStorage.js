const localStorageTasksKey = "tasks";
const localStorageHideDoneKey = "hideDone";

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageTasksKey)) || [];

export const saveHideDoneStateInLocalStorage = (hideDone) =>
  localStorage.setItem(localStorageHideDoneKey, JSON.stringify(hideDone));

export const getHideDoneStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageHideDoneKey)) || false;
