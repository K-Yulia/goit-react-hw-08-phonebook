import PropTypes from 'prop-types';
import { Item, Text, Btn } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
