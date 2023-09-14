import styled from "styled-components";
import {MessagesType, UserType} from "../../../../globalVars.ts";

type PropsType = MessagesType & {
  user: UserType
}

export const Message = ({user, me = false, text, time}: PropsType) => {
  return (
    <MessageWrapper me={me}>
      <Avatar
        src={user.avatar}
        alt=""
      />
      <Text me={me}>
        <h3>{user.name}</h3>
        <p>{text}</p>
        <h6>{time}</h6>
      </Text>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div<{ me: boolean }>`
  display: flex;
  gap: 1rem;
  flex-direction: ${p => p.me ? "row-reverse" : "row"};
`
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 100%;
  border: solid ${p => p.theme.text} .125rem;
`
const Text = styled.div<{ me: boolean }>`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: ${p => p.me ? p.theme.accent : p.theme.primary};

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  h3 {
    font-weight: 600;
    text-align: ${p => p.me ? "end" : "start"};
  }

  h6 {
    font-weight: 600;
    text-align: ${p => p.me ? "end" : "start"};
  }
`