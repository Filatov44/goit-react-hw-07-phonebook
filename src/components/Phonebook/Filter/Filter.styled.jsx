import styled from 'styled-components';

export const StyledSearchLabel = styled.label`
  color: blue;
  margin-top: 20px;
`;
export const StyledSearchInput = styled.input`
  padding: 10px;
  max-width: 400px;
  margin: auto;
  margin-bottom: 25px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: width 0.4s ease-in-out, border 0.4s ease-in-out;

  :focus {
    width: 100%;
    border: 2px solid blue;
  }
`;
export const StyledSearchWrapper = styled.div`
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
