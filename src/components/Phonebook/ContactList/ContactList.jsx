
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts-selector';
import { fetchContacts, deleteContact } from 'redux/contacts-operation';
import { useEffect } from 'react';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import {
  StyledContactList,
  StyledContactItem,
  StyledContactIcon,
  StyledContactDel,
} from 'components/Phonebook/ContactList/ContactList.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactList() {
  //вытягиваем из сторе значение фильтра
  const filter = useSelector(getFilter);

  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // вытягиваем массив контактов из store
  const contacts = useSelector(getContacts);
  // console.log(contacts);

  const normalizetFilter = filter.toLowerCase();

  // фильтруем контакты по фильтру
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizetFilter)
  );

  const elements = filteredContacts.map(({ id, name, number }) => {
    return (
      <StyledContactItem key={id}>
        <StyledContactIcon>
          <FaUserAlt />
        </StyledContactIcon>
        {name}: {number}
        <StyledContactDel
          onClick={() => {
            dispatch(deleteContact(id));
            toast.warn(`Контакт ${name} удален`);
          }}
        >
          <FaTrash />
        </StyledContactDel>{' '}
      </StyledContactItem>
    );
  });
  return (
    <>
      <StyledContactList>{elements}</StyledContactList>
    </>
  );
}

ContactList.defaultProps = {
  items: [],
};


