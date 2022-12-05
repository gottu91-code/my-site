import styled from 'styled-components';
import image from '../images/profile_img.jpg';

const PostItem = styled.li`
  width: 31%;
`
const PostImage = styled.div`
  height: 200px;
  background-color: var(--main-grey);
  border-radius: var(--space-xsm);
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
const TextContainer = styled.div`
  margin-top: var(--space-sm);
  .info {
    display: flex;
    align-items: center;
    column-gap: var(--space-md);
    .date {
      font-size: var(--fz-sm);
    }
    .category {
      font-size: var(--fz-sm);
      background-color: var(--main-black);
      color: var(--main-white);
      padding: var(--space-xsm) var(--space-sm);
    }
  }
.post_title {
  margin-top: var(--space-xsm);
}
`

export const Post = () => {
  return (
    <PostItem>
      <a href="">
        <PostImage>
          <img src={image} alt="" />
        </PostImage>
        <TextContainer>
          <div className="info">
          <p className="date">2022/1/1</p>
          <p className="category">JavaScript</p>
          </div>
          <p className="post_title">ここにタイトルが入ります。</p>
        </TextContainer>
      </a>
    </PostItem>
  )
}