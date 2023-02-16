import { useState, useEffect } from 'react';
import { ReactComponent as IconAdd } from './Icons/add.svg';
import { ReactComponent as IconClose } from './Icons/close.svg';

import { Titel, SubTitel, OpenModal, CloseModal, SectionContactBook } from './App.styled';
import { Clock } from './Clock/Clock';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './FilterContacts/FilterContacts';
import { FormAddContact } from './FormaAddContact/FormAddContact';
import { Modal } from './Modal/Modal';



export const ContactBook = function () {
  const KEY_LS = 'contacts';
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY_LS)) ?? [];
  });
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(KEY_LS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = function (data) {
    const existsContact = contacts.some(({ name }) => name === data.name);
    if (existsContact) {
      alert(`Контакт з Ім'ям ${data.name} вже існує`);
      return;
    }
    setContacts(prevConst => [data, ...prevConst]);
  };

  const deleteContact = btnId => {
    setContacts(contacts.filter(({ id }) => id !== btnId));
  };

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const filterListContacts = e => {
    setFilter(e.target.value);
  };

  const filterLowerCase = filter.toLowerCase();
  const contactsFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterLowerCase)
  );

  return (
    <SectionContactBook>
      <Titel>PhoneBook</Titel>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <FormAddContact addContact={addContact} closeModal={toggleModal} />
          <CloseModal onClick={toggleModal}>
            <IconClose width="24" height="24" />
          </CloseModal>
          <Clock />
        </Modal>
      )}
      <OpenModal onClick={toggleModal}>
        <IconAdd width="32" height="32" />
      </OpenModal>
      <SubTitel>Contacts</SubTitel>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} onChangeFilter={filterListContacts} />
          <ContactsList
            contacts={contactsFilter}
            deleteContact={deleteContact}
          />
        </>
      ) : (
        <p>Contact list is empty.</p>
      )}
    </SectionContactBook>
  );
};

