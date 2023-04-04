import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'contactsStorage/contactsSlice';
import styles from './contactsListItem.module.css';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <li id={id} className={styles.item}>
      {name}: {number}
      <button className={styles.button} onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
