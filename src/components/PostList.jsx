import styled from "styled-components";
import { Post } from "./Post";

const PostListContainer = styled.div`
  flex-shrink: 0;
  width: 78%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: var(--space-lg);
  }
`

export const PostList = () => {
  return (
    <PostListContainer>
      <ul>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </PostListContainer>
  )
}