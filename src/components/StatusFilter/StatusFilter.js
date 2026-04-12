import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch } from "react-redux";
import { filterTodo } from "redux/actions";
import { FILTER_TYPES } from "redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch(filterTodo);
  return (
    <div className={css.wrapper}>
      <Button onClick={() => dispatch(filterTodo(FILTER_TYPES.all))}>All</Button>
      <Button onClick={() => dispatch(filterTodo(FILTER_TYPES.active))}>Active</Button>
      <Button onClick={() => dispatch(filterTodo(FILTER_TYPES.completed))}>Completed</Button>
    </div>
  );
};
