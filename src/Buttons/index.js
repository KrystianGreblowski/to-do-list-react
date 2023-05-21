import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button onClick={toggleHideDone} className={`buttons__singleButton`}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__singleButton"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
