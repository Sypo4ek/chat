import React, { useEffect } from "react";
import { ContentWrapper, MenuWrapper, Wrapper } from "./styled";
import Menu from "../Menu";
import { Route, Routes, useNavigate } from "react-router-dom";
import Settings from "../Settings";
import Auth from "../Auth";
import Game from "../Game";
import { useContextToken } from "@/store/token";


export const Main  = ( ) => {
  const { token} = useContextToken()

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu/>
      </MenuWrapper>
      <ContentWrapper>
        <Routes>
          { token && 
            <>
              <Route path="/settings" element={<Settings/>}></Route>
            </>
          }
          <Route path='/*' element={<Game/>}></Route>
        </Routes>
      </ContentWrapper>
    </Wrapper>
  )
}