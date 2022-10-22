import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todos";
import { v4 as generateTodoId } from "uuid";
import styles from "./index.module.css";

const TodoForm = () => {
  const [todoContent, setTodoContent] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTodoContent(e.target.value);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const todoId = generateTodoId();

    dispatch(
      addTodo({
        id: todoId,
        todo: todoContent,
      })
    );

    setTodoContent("");
  };

  return (
    <form
      className={styles["todo-creation-form"]}
      onSubmit={handleFormSubmission}>
      <input
        type="text"
        value={todoContent}
        onChange={handleInputChange}
        placeholder="New Todo Content"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoForm;
