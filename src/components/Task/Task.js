import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { removeTodo } from "redux/actions";
import { useDispatch } from "react-redux";


export const Task = ({ task }) => {
  const dispatch = useDispatch(removeTodo)
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => dispatch(removeTodo(task.id))}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
