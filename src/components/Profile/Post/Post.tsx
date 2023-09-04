import styled from "styled-components";
import {UserAvatarExampleURL} from "../../../globalVars.ts";

export const Post = () => {
  return (
    <PostWrapper>
      <Avatar
        src={UserAvatarExampleURL}
        alt=""
      />
      <MessageWrapper>
        <h3>Viktor</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nemo numquam quas.</p>
      </MessageWrapper>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  display: flex;
  gap: 2rem;
`
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 100%;
  border: solid ${p => p.theme.text} .125rem;
`
const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //text-align: center;

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
;

  h3 {
    font-weight: 600;
  }
`