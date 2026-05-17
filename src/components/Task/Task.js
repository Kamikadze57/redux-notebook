import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { MdClose } from "react-icons/md";
import { deleteTodos } from "../../redux/todos/todosOperations";
import EditModal from "../EditModal/EditModal";

export const Task = ({ task }) => {
  const [modal, isOpen] = useState(false);
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
      <button className={css.btn} onClick={() => isOpen(true)}>redact</button>
      <button className={css.btn} onClick={() => dispatch(deleteTodos(task.id))}>
        <MdClose size={24} />
      </button>
      {modal && <EditModal modal={modal} text={task.text} close={() => isOpen(false)}/>}
    </div>
  );
};
