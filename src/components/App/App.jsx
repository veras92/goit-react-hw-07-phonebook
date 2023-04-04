import ContactForm from '../Form/contactForm';
import ContactList from '../List/contactList';
import Filter from '../Filter/contactFilter';
import css from './App.module.css';

function App() {
  return (
    <div className={css.AppContainer}>
      <h1 className={css.AppTitle}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
