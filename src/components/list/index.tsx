import React, { memo } from "react";
import { Card, ContentWrapper, Label, Message, Time, Wrapper } from "./styled";
import { TMessage, currentId } from "@/index";

type TList = {messages:Array<TMessage>}

export const List  = memo(({messages}:TList) => {
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
})