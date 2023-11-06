import { useDispatch } from "react-redux";
import { Button, StyledButtons } from "../styled";
import { fetchExampleTasks } from "../tasksSlice";

const ButtonExampleTasks = () => {
  const dispatch = useDispatch();

  return (
    <StyledButtons oneButton>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    </StyledButtons>
  );
};

export default ButtonExampleTasks;
