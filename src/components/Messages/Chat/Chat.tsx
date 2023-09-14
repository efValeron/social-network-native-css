import styled from "styled-components";
import {allMessages, UserType} from "../../../globalVars.ts";
import {Message} from "./Message/Message.tsx";

type PropsType = {
  user: UserType
}

export const Chat = ({user}: PropsType) => {

  const messages = allMessages[user.id] || []

  return (
    <ChatWrapper>
      <ChatHeader>
        {user.name}
      </ChatHeader>
      <ChatBody>
        {
          messages.map(m => <Message key={m.id} id={m.id} user={user} me={m.me} text={m.text} time={m.time}/>)
        }
      </ChatBody>
      <ChatInputWrapper>
        <textarea></textarea>
        <button>Send</button>
      </ChatInputWrapper>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  height: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
`
const ChatHeader = styled.div`
  height: 4rem;
  border-bottom: solid ${p => p.theme.primary50} 2px;

  background-color: ${p => p.theme.secondary};
`
const ChatBody = styled.div`
  max-height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  //overflow-y: scroll;

  background-color: ${p => p.theme.background};
`
const ChatInputWrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.background};

  textarea {
    height: 100%;
    width: 100%;
    border: none;
  }

  button {
    height: 2rem;
    margin: 1rem;
    padding: .5rem 1rem;
    box-sizing: border-box;
  }
`