import { useDispatch } from "react-redux";
import { Button } from "../Buttons/styled";
import { fetchExampleTasks } from "../tasksSlice";

const ButtonExampleTasks = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
};

export default ButtonExampleTasks;
