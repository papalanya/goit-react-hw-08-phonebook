import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './App.styled';
import { selectIsLoading, selectError } from '../Redux/selectors';

export const App = () => {
  const IsLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <h1> Phonebook</h1>
      <ContactForm />
      <h1> Contacts</h1>
      <Filter />
      {IsLoading && !error && <div> Loading...</div>}
      <ContactList />
    </Wrapper>
  );
};
