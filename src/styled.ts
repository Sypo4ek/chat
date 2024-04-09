import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
`

export const Checkbox = styled.div<{isActive: boolean}>`
  position: relative;
  align-items: center;
  width: 15rem;
  padding: 1rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  user-select: none;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: ${({isActive})=> isActive ? '#67d767' :'#b4b3b3'};
    border: .125rem solid #636369;
    border-radius: .5rem;
    transform: translateY(-50%);
    content: '';
  }
`