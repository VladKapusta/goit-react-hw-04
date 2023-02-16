import { ContactItem } from './ContactItem/ContactItem';
import { ContactsBox, ListContacts, Contact } from './ContactList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactsBox>
      <ListContacts>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <ContactItem
              name={name}
              number={number}
              id={id}
              deleteContact={deleteContact}
            />
          </Contact>
        ))}
      </ListContacts>
    </ContactsBox>
  );
};
