import styled from "styled-components";

export const Main = ({ children, headerHeight }) => {
  const SMain = styled.main`
    margin: ${headerHeight + 50}px 0 50px;
  `

  return (
    <SMain>
        {children}
    </SMain>
)
}