import styled from "styled-components";
import { PostList } from "./PostList";
import { PostSideBar } from "./PostSideBar";

const PostsContainer = styled.section`
  display: flex;
  column-gap: var(--space-lg);
  margin: var(--space-4xl) var(--space-10xl) 0;
  align-items: flex-start;
`

export const Posts = ({ headerHeight }) => {
  return (
    <PostsContainer>
      <PostList />
      <PostSideBar headerHeight={headerHeight} />
    </PostsContainer>
  )
}