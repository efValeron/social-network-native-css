import styled from "styled-components";
import {UserList} from "./UserList/UserList.tsx";
import {Chat} from "./Chat/Chat.tsx";
import {users} from "../../globalVars.ts";
import {useState} from "react";

export const Messages = () => {
  const [selectedUserId, setSelectedUserId] = useState(1)
  const user = users.find(u => u.id === selectedUserId)

  return (
    <MessagesWrapper>
      <UserList users={users} setSelectedUserId={setSelectedUserId}/>
      <Chat user={user!}/>
    </MessagesWrapper>
  );
};

const MessagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 1rem;
`