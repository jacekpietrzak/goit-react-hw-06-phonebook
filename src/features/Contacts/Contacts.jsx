import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../Contacts/contactsSlice';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './Contacts.module.css';

export function Contacts() {
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      {contacts && <ContactList />}
    </>
  );
}
