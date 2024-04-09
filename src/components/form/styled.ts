import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  gap: .25rem;
  align-items: center;
  padding: .5rem;
  border-radius: .5rem;
  box-shadow: inset rgb(180 179 179) 0 0 2px 0;

  input {
    min-width: 8rem;
    padding: 1rem;
    border: none;
    border-radius: .5rem;
  }

  button {
    height: 2rem;
    padding:  .5rem;
    color: white;
    background-color: #3535F4;
    border: none;
    border-radius: .5rem;
    outline: none;
    cursor: pointer;
  }
`