import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';

export default function ContactList() {
  const allContacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.contactList}>
        {isLoading && <p>Loading contacts...</p>}
        {isError && <p>Error: {isError}</p>}
        {filteredContacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
      {!isLoading &&
        !isError &&
        filteredContacts.length === 0 &&
        allContacts.length > 0 && (
          <p>No contacts found matching your filter.</p>
        )}

      {!isLoading && !isError && allContacts.length === 0 && (
        <p>Your phonebook is empty. Add your first contact!</p>
      )}
    </div>
  );
}
