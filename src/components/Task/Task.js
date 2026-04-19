import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { removeToDo, toggleToDo } from "../../redux/todos/todosSlice";

import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.complete}
        onChange={() => dispatch(toggleToDo(task.id))}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => dispatch(removeToDo(task.id))}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
