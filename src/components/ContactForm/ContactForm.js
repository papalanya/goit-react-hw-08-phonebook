import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Button, TextField } from '@mui/material';
import { Form } from 'components/ContactForm/ContactForm.styled';
import { selectContacts } from 'Redux/selectors';
import { addContact } from 'Redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);

        break;
      default:
        throw new Error('There has been a mistake. Try again, please.');
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      toast.error(`${name} is already in your contacts.`);

      return;
    } else {
      const newContact = { name, number };
      dispatch(addContact(newContact));
      setIsLoading(true);
    }

    setName('');
    setNumber('');
    setIsLoading('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onFormChange}
      />

      <TextField
        id="outlined-basic"
        label="Phone number"
        variant="outlined"
        size="small"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onFormChange}
      />
      <Button
        type="submit"
        variant="outlined"
        size="small"
        disabled={isLoading}
      >
        Add contact
      </Button>
      <Toaster />
    </Form>
  );
};
