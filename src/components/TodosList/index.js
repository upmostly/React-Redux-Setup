import TodoCard from "../TodoCard";
import styles from "./index.module.css";

const TodosList = ({ todos }) => {
  return (
    <div className={styles["todos-list"]}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodosList;
