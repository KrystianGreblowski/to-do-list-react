import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, StyledButtons } from "../styled";
import { fetchExampleTasks } from "../tasksSlice";

const ButtonExampleTasks = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading((loading) => (loading = true));
    setTimeout(() => setLoading((loading) => (loading = false)), 800);
  };

  const showExampleTasks = () => {
    dispatch(fetchExampleTasks());
    return "Pobierz przykładowe zadania";
  };

  return (
    <StyledButtons oneButton>
      <Button onClick={startLoading} disabled={loading ? true : false}>
        {loading ? "Ładowanie..." : showExampleTasks()}
      </Button>
    </StyledButtons>
  );
};

export default ButtonExampleTasks;
