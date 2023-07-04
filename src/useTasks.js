import { useState, useEffect } from "react";

const getInitialTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
const getInitialHideDoneState = () =>
  JSON.parse(localStorage.getItem("hideDone")) || false;

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [hideDone, setHideDone] = useState(getInitialHideDoneState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [tasks, hideDone]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};
