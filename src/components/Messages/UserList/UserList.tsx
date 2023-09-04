import styled from "styled-components";
import {User} from "./User/User.tsx";
import {Fragment} from "react";
import {UserType} from "../../../globalVars.ts";

type PropsType = {
  users: UserType[]
  setSelectedUserId: (userId: number) => void
}

export const UserList = ({users, setSelectedUserId}: PropsType) => {
  return (
    <UserListWrapper>
      {users.map((user, index) => (
        <Fragment key={user.id}>
          <User user={user} setSelectedUserId={setSelectedUserId}/>
          {index < users.length - 1 && <Divider/>}
        </Fragment>
      ))}
    </UserListWrapper>
  );
};

const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 1.5rem;
`
const Divider = styled.div`
  margin: 1.25rem 1.5rem;
  height: 2px;
  background-color: ${p => p.theme.primary50};
`