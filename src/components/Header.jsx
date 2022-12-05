import styled from 'styled-components';
import { IconList } from './IconList';

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5000;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--space-5xl);
  background-color: var(--main-black);
  padding: var(--space-md) var(--space-10xl);
  color: var(--main-white);
`;
const Navigation = styled.nav`
  margin-left: auto;

  ul {
    display: flex;
    column-gap: var(--space-2xl);
  }
`;
const Title = styled.h1`
  font-size: var(--fz-2xl);
`;

export const Header = ({ _ref }) => {
  return (
    <SHeader ref={_ref}>
      <Container>
        <Title>
          <a href=''>Sho Goto</a>
        </Title>
        <Navigation>
          <ul>
            <li>
              <a href="">Works</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Posts</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </Navigation>
        <IconList color='#fff' showText={false} />
      </Container>
    </SHeader>
  )
}