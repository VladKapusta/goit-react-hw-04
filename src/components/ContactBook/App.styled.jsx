import styled from '@emotion/styled';
import { IconButton } from './Button/Button';

export const Titel = styled.h1`
  margin-bottom: 10px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
`;

export const SubTitel = styled.h2`
  margin-left: 30px;
  margin-bottom: 20px;
  font-size: 32px;
`;

export const BoxFIlter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OpenModal = styled(IconButton)`
  margin-bottom: 20px;
`;
export const CloseModal = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;

  transition: background-color 350ms cubic-bezier(0.075, 0.82, 0.165, 1),
    fill 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: red;
    fill: #fff;
  }
`;
