import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addContact, getContacts } from 'redux/contacts-slice';
import { getContacts } from 'redux/contacts-selector';
import { addContact } from 'redux/contacts-operation';

import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledContactForm,
  StyledLabel,
  StyledInput,
  StyledButtonAddContact,
} from 'components/Phonebook/ContactForm/ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const telId = nanoid();
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // вытягиваем массив контактов из store
  const contacts = useSelector(getContacts);

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    //Проверяем на дубликат
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isDuplicateNumber = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (isDuplicateName) {
      resetForm();
      return toast.info(
        `Контакт с именем ${name} уже находится в телефонной книге`
      );
    }

    if (isDuplicateNumber) {
      resetForm();
      return toast.info(`${number} уже записан в телефонной книге`);
    }

    //отправляем экшен со значением фильтра в store
    dispatch(addContact({ name, number, id }));
    toast.success(`Контакт ${name} успешно добавлен в телефонную книгу`);
    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor={nameId}>Name</StyledLabel>
      <StyledInput
        id={nameId}
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <StyledLabel htmlFor={telId}>Number</StyledLabel>
      <StyledInput
        id={telId}
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledButtonAddContact type="submit">Add contact</StyledButtonAddContact>
    </StyledContactForm>
  );
}


