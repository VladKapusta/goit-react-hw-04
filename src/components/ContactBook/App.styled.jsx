import styled from '@emotion/styled';
import { IconButton } from './Button/Button';

export const SectionContactBook = styled.section`
  width: 700px;
  min-height: 310px;
  margin: 50px auto ;
  padding: 10px 30px 20px;

  background-color: rgb(206, 206, 206);
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

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
