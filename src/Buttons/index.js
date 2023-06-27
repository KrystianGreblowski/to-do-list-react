import { StyledButtons, SingleButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <SingleButton onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </SingleButton>

        <SingleButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </SingleButton>
      </>
    )}
  </StyledButtons>
);

export default Buttons;
