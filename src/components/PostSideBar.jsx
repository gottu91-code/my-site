import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: ${({ headerHeight }) => headerHeight + 30}px;
  flex-grow: 1;
  background-color: var(--main-grey);
  padding: var(--space-lg) var(--space-md);
  border-radius: var(--space-xsm);
  ul {
    margin-top: var(--space-sm);
  }
`
const Title = styled.h2`
  font-size: var(--fz-lg);
  text-align: center;
`
const Item = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--main-black);
    padding: var(--space-sm) 0;
  }
`
export const PostSideBar = ({ headerHeight }) => {
  return (
    <Container headerHeight={headerHeight}>
      <Title>Category</Title>
      <ul>
        <Item>
          <a href="">
            <p className="category">JavaScript</p>
            <p className="post_count">(10)</p>
          </a>
        </Item>
        <Item>
          <a href="">
            <p className="category">JavaScript</p>
            <p className="post_count">(10)</p>
          </a>
        </Item>
        <Item>
          <a href="">
            <p className="category">JavaScript</p>
            <p className="post_count">(10)</p>
          </a>
        </Item>
        <Item>
          <a href="">
            <p className="category">JavaScript</p>
            <p className="post_count">(10)</p>
          </a>
        </Item>
      </ul>
    </Container>
  )
}