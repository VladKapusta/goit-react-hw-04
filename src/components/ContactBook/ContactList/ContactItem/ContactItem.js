import { ReactComponent as DeleteIcon } from '../../Icons/delete.svg';
import { DeleteBtn, TextContent } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <TextContent>{name}</TextContent>
      <TextContent>{number}</TextContent>
      <DeleteBtn onClick={() => deleteContact(id)}>
        <DeleteIcon width="20" height="20" />
      </DeleteBtn>
    </>
  );
};
