import styled from "styled-components";

export const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const StyledLabel = styled.label`
    color: blue;
`;

export const StyledInput = styled.input`
  font-size: 20px;
  padding: 10px;
  max-width: 400px;
  margin: auto;
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

export const StyledButtonAddContact = styled.button`
  width: 100px;
  padding: 5px 5px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  background-color: rgb(33, 149, 243);
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    background-color: blue;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
    scale: 1.1;
  }
  :hover {
    background-color: blue;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
    scale: 1.1;
  }
`;