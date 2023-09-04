import styled from "styled-components";
import {switches, UserType} from "../../../../globalVars.ts";

type PropsType = {
  user: UserType
  setSelectedUserId: (userId: number) => void
}

export const User = ({user, setSelectedUserId}: PropsType) => {
  const selectUserHandler = () => {
    setSelectedUserId(user.id)
  }

  return (
    <UserWrapper onClick={selectUserHandler}>
      {switches.messagesUserWithAvatar && <Avatar src={user.avatar} alt=""/>}
      <h3>{user.name}</h3>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
  border-radius: .5rem;
  padding: .5rem 1rem;
  box-sizing: border-box;
  cursor: pointer;
  transition-duration: 0.1s;

  &:hover {
    background-color: ${p => p.theme.background};
  }
`
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 100%;
  border: solid ${p => p.theme.text} .125rem;
`