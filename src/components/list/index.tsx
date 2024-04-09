import React, { useEffect, useState } from "react";
import dayjs from 'dayjs'
import { Card, ContentWrapper, Label, Message, Time, Wrapper } from "./styled";
import { TMessage, currentId } from "@/index";

export const List  = ({messages}:{messages:Array<TMessage>} ):JSX.Element => {
  return (
    <Wrapper>
      <ContentWrapper>
      {messages.map((item, index)=>{ 
        return <Card isMain={currentId === item.id} key={`${item.id}_${index}`}>
          <Label>
          {item.user}
          </Label>
          <Message>{item.message}</Message>
          <Time>
          </Time>
        </Card>
      })}
      </ContentWrapper>
    </Wrapper>
  )
}