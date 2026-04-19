import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { getTodos } from "../../redux/todos/todosSelectors";

export const TaskList = () => {
  const todos = useSelector(getTodos);
  console.log(todos);
  return (
    <ul className={css.list}>
      {todos.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
