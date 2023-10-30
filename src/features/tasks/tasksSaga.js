import { takeLatest, takeEvery, select, call, put } from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectHideDone,
  selectTasks,
  setTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import {
  saveTasksInLocalStorage,
  saveHideDoneStateInLocalStorage,
} from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  const hideDone = yield select(selectHideDone);
  yield call(saveTasksInLocalStorage, tasks);
  yield call(saveHideDoneStateInLocalStorage, hideDone);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
