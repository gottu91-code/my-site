import styled from "styled-components";

const SFooter = styled.footer`
  text-align: center;
  background-color: var(--main-black);
  color: var(--main-white);
  padding: var(--space-xl) 0;
`
export const Footer = () => {
  return (
    <SFooter>
      <p>&copy; 2022 Sho Goto. All Rights Reserved.</p>
    </SFooter>
  )
}