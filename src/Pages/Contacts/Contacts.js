import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/contacts/operations';
import { selectError, selectIsLoading } from 'Redux/contacts/selectors';
import { BarLoader } from 'react-spinners';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Header, Loader } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Header>Phonebook</Header>
      <ContactForm />

      <Filter />
      <Header>Contacts</Header>

      {isLoading && !error ? (
        <Loader>
          <BarLoader color="#2f9e99" />
        </Loader>
      ) : (
        <ContactList />
      )}
    </Container>
  );
}
