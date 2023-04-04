import { ContactForm } from './components/Form';
import { ContactsList } from './components/List';
import { ContactsFilter } from './components/Filter/contactFilter';

export const App = () => {
  return (
    <div className="container">
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactsFilter />
        <ContactsList />
      </>
    </div>
  );
};
