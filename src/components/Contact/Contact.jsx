import css from './Contact.module.css';

export const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css.contactItem}>
      <span className={css.contactDetails}>
        {contact.name} <br /> {contact.number}
      </span>
      <button className={`${css.button} ${css.deleteButton}`} onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};