import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../../store/actions/todos";
import styles from "./index.module.css";

const ControlsPanel = ({ handleUpdateTodo, handleRemoveTodo }) => {
  return (
    <div className={styles["controls-container"]}>
      <button
        className={styles["controls-container__update-btn"]}
        onClick={handleUpdateTodo}>
        Update
      </button>
      <button
        className={styles["controls-container__remove-btn"]}
        onClick={handleRemoveTodo}>
        Remove
      </button>
    </div>
  );
};

const TodoUpdateInput = ({ todoContent, handleUpdateTodo }) => {
  const [inputContent, setInputContent] = useState(todoContent);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    handleUpdateTodo(inputContent);
  };

  return (
    <form
      className={styles["update-todo-input-container"]}
      onSubmit={handleFormSubmission}>
      <input
        type="text"
        value={inputContent}
        onChange={(e) => {
          setInputContent(e.target.value);
        }}
      />
      <button type="submit">Save</button>
    </form>
  );
};

const TodoCard = ({ id, todo }) => {
  const [isUpdatingTodo, setIsUpdatingTodo] = useState(false);

  const dispatch = useDispatch();

  const triggerUpdateTodo = () => {
    setIsUpdatingTodo(true);
  };

  const handleTodoUpdate = (newTodoContent) => {
    dispatch(updateTodo(id, { todo: newTodoContent }));
    setIsUpdatingTodo(false);
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div className={styles["todo-card"]}>
      {isUpdatingTodo ? (
        <TodoUpdateInput
          todoContent={todo}
          handleUpdateTodo={handleTodoUpdate}
        />
      ) : (
        <p>{todo}</p>
      )}
      <ControlsPanel
        handleUpdateTodo={triggerUpdateTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default TodoCard;
