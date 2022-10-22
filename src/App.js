import "./App.css";
import { useSelector } from "react-redux";
import TodosList from "./components/TodosList";
import TodoForm from "./components/TodoForm";

function App() {
  const { todos } = useSelector((state) => state);

  return (
    <div className="App">
      <TodoForm />
      <TodosList todos={todos} />
    </div>
  );
}

export default App;
