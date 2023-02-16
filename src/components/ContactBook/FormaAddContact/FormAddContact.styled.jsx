import styled from '@emotion/styled';

export const FormContact = styled.form`
  display: block;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 500;
`;

export const LabelText = styled.span`
  margin-left: 20px;
`;
export const Input = styled.input`
  display: block;
  padding: 4px 12px;

  border-radius: 5px;
  font-size: 24px;
`;
export const ButtonSubmit = styled.button`
  display: block;
  
  width: 150px;
  padding: 10px;
  margin: auto;
  margin-top: 30px;
  border-radius: 8px;
  cursor: pointer;

  font-size: 16px;

  transition: background-color 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    background-color: rgb(39, 228, 22);
    color:#fff
  }
`;
