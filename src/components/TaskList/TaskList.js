import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";

import { getVisibleTodos } from "redux/selectors";

export const TaskList = () => {
  const todos = useSelector(getVisibleTodos);
  // console.log(todos);
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
