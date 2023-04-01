import { useDispatch } from 'react-redux';
import { IoMdPerson, IoIosBackspace } from 'react-icons/io';
import { Button } from '@mui/material';
import { deleteContact } from 'Redux/operations';
import { ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ListItem>
      <p>
        <span>
          <IoMdPerson />
        </span>
        {name}: {phone}
      </p>
      <Button
        type="button"
        onClick={() => handleDeleteButton(id)}
        variant="outlined"
        startIcon={<IoIosBackspace />}
        size="small"
      >
        Delete
      </Button>
    </ListItem>
  );
};
