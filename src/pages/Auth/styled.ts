import styled, { css } from "styled-components";
import PALETTE from "@/assets/colors";
import SIZE  from "@/assets/sizes";


export const Wrapper = styled.div`
`

export const Input = styled.input.attrs(({type})=> ({type: type || 'text'}))`
  ${({type})=> type === 'submit' && css`
    margin-bottom: ${SIZE.s}px;
    color: ${PALETTE.text};
    border-color: transparent;
    outline: none;
    box-shadow: 0 0 0 1px ${PALETTE.placeholder};
    cursor: pointer;
  `}

  margin-bottom: ${SIZE.l}px;
  padding: ${SIZE.s}px ${SIZE.m}px;
  background-color: ${PALETTE.background} !important;
  border: 1px solid ${PALETTE.text};
  border-radius: ${SIZE.s}px;
`

export const Label = styled.label`
  margin-bottom: ${SIZE.s}px;
`

export const Title = styled.div``

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: ${SIZE.xl}px;
  border: 1px solid ${PALETTE.text};
  border-radius: ${SIZE.xl}px;
  transform: translate(-50%, -50%);
`