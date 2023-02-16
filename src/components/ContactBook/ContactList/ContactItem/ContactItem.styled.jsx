import styled from '@emotion/styled';
import { IconButton } from 'components/ContactBook/Button/Button';


export const TextContent = styled.span`
  width: 250px;
  font-weight: 600;
  font-size: 24px;
`;
export const DeleteBtn = styled(IconButton)`
  background-color: #fff;
  :hover {
    background-color: red;
    fill: #fff;
  }
`;
