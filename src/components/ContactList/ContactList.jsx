import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contactFilter = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={s.contactsList}>
        {Array.isArray(contactFilter) &&
          contactFilter.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
