import css from "./TaskCounter.module.css";
import { getActiveTodo, getCompletedTodo} from "redux/selectors";
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  const activeTodos = useSelector(getActiveTodo);
  // console.log(todos);
const completedTodos = useSelector(getCompletedTodo);

  return (
    <div>
      <p className={css.text}>Active: {activeTodos.length}</p>
      <p className={css.text}>Completed: {completedTodos.length}</p>
    </div>
  );
};
