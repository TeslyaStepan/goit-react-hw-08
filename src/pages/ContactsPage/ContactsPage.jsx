import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "../../App.module.css";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h2 className={s.header}>Phonebook</h2>
      <ContactForm />
      <h2 className={s.header}>Contacts</h2>
      <SearchBox />

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: ${isError}</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
}
