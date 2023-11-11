import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, StyledButtons } from "../styled";
import { fetchExampleTasks } from "../../tasksSlice";

const ButtonExampleTasks = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const showExampleTasks = () => {
    setLoading((loading) => (loading = false));
    dispatch(fetchExampleTasks());
  };

  const startLoading = () => {
    setLoading((loading) => (loading = true));
    setTimeout(showExampleTasks, 800);
  };

  return (
    <StyledButtons oneButton>
      {loading === false ? (
        <Button onClick={startLoading}>Pobierz przykładowe zadania</Button>
      ) : (
        <Button disabled={true}>Ładowanie...</Button>
      )}
    </StyledButtons>
  );
};

export default ButtonExampleTasks;
