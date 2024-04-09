import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 5rem;
  z-index: 1;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  overflow: hidden;
  color: white;
  text-overflow: ellipsis;
  background-color: red;
  border-radius: 100%;
  cursor: pointer;
`