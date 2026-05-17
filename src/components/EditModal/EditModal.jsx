import css from './EditModal.module.css'
import { MdClose } from "react-icons/md";

const EditModal = ({modal, text, close}) => {
  return (
    <div className={css.modal__box}>
      <form>
        <label>
          <input
            className={css.field}
            type="text"
            name="edit"
            placeholder="Enter task rename..."
            
          />
        </label>
        <button className={css.btn}>Edit</button>
      </form>
      <button className={css.btn} onClick={close}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default EditModal;