import styled from "styled-components";
import {Post} from "./Post/Post.tsx";
import {OwnerAvatarExampleURL, ProfileNewPostTextareaPlaceHolder} from "../../globalVars.ts";

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileInfoWrapper>
        <Avatar
          src={OwnerAvatarExampleURL}
          alt=""
        />
        <DescriptionWrapper>
          <h1>Dmitry</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </DescriptionWrapper>
      </ProfileInfoWrapper>
      <PostsWrapper>
        <h2>My posts</h2>

        <NewPostWrapper>
          <textarea rows={2} placeholder={ProfileNewPostTextareaPlaceHolder}></textarea>
          <button>Send</button>
        </NewPostWrapper>

        <PostsList>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </PostsList>
      </PostsWrapper>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const ProfileInfoWrapper = styled.div`
  display: flex;
`
const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 100%;
  border: solid ${p => p.theme.text} .25rem;
`
const DescriptionWrapper = styled.div`
  margin-left: 2rem;
`
const PostsWrapper = styled.div``
const NewPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: .5rem;
  margin-top: 1.5rem;

  textarea {
    font-size: 1.125rem;
    width: 100%;
    padding: .5rem;
    box-sizing: border-box;
  }
;

  button {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: .25rem 2rem;
  }
`
const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`