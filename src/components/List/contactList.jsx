import { useSelector } from 'react-redux';
import { ContactsListItem } from './ListItems/contactListItem';
import styles from './contactsList.module.css';

const getContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getContacts(items, filter);
  return (
    <ul className={styles.section}>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          ))
        : 'No contacts'}
    </ul>
  );
};
