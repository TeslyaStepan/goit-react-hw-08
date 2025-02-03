import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <ul className={s.contactText}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className={s.btnDlt} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
