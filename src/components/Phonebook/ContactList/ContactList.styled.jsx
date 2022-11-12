import styled from 'styled-components';

export const StyledContactList = styled.ul`
  max-width: 500px;
  margin: auto;
  padding: 0;
`;

export const StyledContactItem = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px dashed #ccc;
  border-radius: 15px;
  margin-bottom: 5px;
`;

export const StyledContactDel = styled.button`
  font-size: 20px;
  padding: 5px;
  border: none;
  color: red;
  background-color: #ffffff;
  :focus {
    scale: 1.2;
  }
  :hover {
    scale: 1.2;
  }
`;
export const StyledContactIcon = styled.span`
  color: blue;
  margin-right: 30px;
  padding: 5px;
`;
