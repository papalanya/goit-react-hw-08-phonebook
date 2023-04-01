import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './ContactList.styled';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))
      ) : filterValue && contacts ? (
        <div>Couldn't find any matches.</div>
      ) : (
        <div>You don't have any contacts yet.</div>
      )}
    </Wrapper>
  );
};
