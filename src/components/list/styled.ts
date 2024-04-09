import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  gap: 1rem;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  
`

export const Label = styled.div`
  position: absolute;
  color: #B4B3B3;
  font-size: .725rem;
  text-align: end;
  border-radius: 100%;
`

export const Card = styled.div<{isMain: boolean}>`
  position: relative;
  display: flex;
  flex-direction: row${({isMain})=> isMain ? '-reverse' : ''};
  gap: .25rem;
  align-items: center;
  align-self: ${({isMain})=> isMain ? 'end' : 'start'};
  box-sizing: border-box;
  min-width: 10rem;
  padding: 1rem 1.25rem;
  background-color: aliceblue;
  border-radius: .5rem;
  box-shadow: inset rgb(180 179 179) 0 0 2px 0;
  cursor: default;
  ${Label} {
    top: .25rem;
    right: ${({isMain})=> isMain ? '1rem' : 'auto'};
    left: ${({isMain})=> isMain ? 'auto' : '1rem'};
  }
`



export const Message = styled.div`
  width: 100%;
  padding: .5rem 0;
  font-size: 1rem;
  text-align: start;
  `

export const Time = styled.div`
  font-size: .875rem;
  text-align: end;
`