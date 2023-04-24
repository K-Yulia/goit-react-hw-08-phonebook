import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Contact } from './Contact';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          );
        })}
    </List>
  );
};
