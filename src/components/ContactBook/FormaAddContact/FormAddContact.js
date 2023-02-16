import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormContact,
  Label,
  LabelText,
  Input,
  ButtonSubmit,
} from './FormAddContact.styled';

export const FormAddContact = function ({ addContact, closeModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const saveInputValue = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(5),
      name,
      number,
    };
    addContact(contact);
    clearFormInput();
    closeModal();
  };

  const clearFormInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContact onSubmit={onSubmitForm}>
      <Label>
        <LabelText>Name</LabelText>
        <Input
          autoFocus
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={saveInputValue}
        />
      </Label>
      <Label>
        <LabelText>Number</LabelText>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={saveInputValue}
        />
      </Label>
      <ButtonSubmit type="submit">Add Contact</ButtonSubmit>
    </FormContact>
  );
};
