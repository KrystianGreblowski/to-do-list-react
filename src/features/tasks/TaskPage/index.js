import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />

      <Section
        title={task ? task.content : "Niestety, ale nie znaleziono zadania 😿"}
        body={<>{task ? `Ukończone: ${task.done ? "Tak" : "Nie"}` : ""}</>}
      />
    </Container>
  );
}

export default TaskPage;
