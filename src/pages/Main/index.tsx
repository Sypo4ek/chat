import React from "react";
import { ContentWrapper, MenuWrapper, Wrapper } from "./styled";
import Menu from "../Menu";
import { Route, Routes } from "react-router-dom";
import Settings from "../Settings";
import Game from "../Game";
import { useContextToken } from "@/store/token";
import Inventory from "../Inventory";


export const Main  = ( ) => {
  const { token} = useContextToken()
  
  return (
    <Wrapper>
      <MenuWrapper>
        <Menu/>
      </MenuWrapper>
      <ContentWrapper>
        <Routes>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/settings" element={<Settings/>} />
          <Route path='/*' element={<Game/>}/>
        </Routes>
      </ContentWrapper>
    </Wrapper>
  )
}