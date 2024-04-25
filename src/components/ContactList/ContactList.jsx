import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
 
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
      </ul>
  );
};