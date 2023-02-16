import styled from '@emotion/styled';

export const ContactsBox = styled.div`
  margin-top: 30px;
  padding: 0 20px;
`;
export const ListContacts = styled.ul`
  > :not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Contact = styled.li`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
`;
