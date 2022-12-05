import styled from "styled-components";
import { IconList } from "./IconList";
import profileImg from '../images/profile_img.jpg';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-10xl);
  background-color: var(--main-grey);
  column-gap: var(--space-4xl);
  width: fit-content;
  border-radius: var(--space-sm);
`
const Img = styled.div`
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
`
const Info = styled.div`
  .label {
    font-size: var(--fz-lg);
  }
  .name_en {
    font-size: var(--fz-3xl);
    margin-top: var(--space-xsm);
  }
  .name_ja {
    margin-top: var(--space-sm);
  }
  .birth {
    font-size: var(--space-sm);
    margin-top: var(--space-xsm);
  }
`
export const Profile = () => {
  return (
    <Container>
      <Img>
        <img src={profileImg} alt="Sho Goto" />
      </Img>
      <Info>
        <p className="label">Web Engineer</p>
        <p className="name_en">Sho Goto</p>
        <p className="name_ja">後藤 将</p>
        <p className="birth">BIRTH : 1991/9/16</p>
      </Info>
      <IconList color='#1a1a1a' vertical={true} />
    </Container>
  )
}