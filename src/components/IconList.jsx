import styled from "styled-components";

const IconItem = styled.li`
  a {
    display: flex;
    align-items: center;
    column-gap: var(--space-xsm);
  }
`
const IconListWrapper = styled.ul`
  display: flex;
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
  column-gap: var(--space-md);
  row-gap: var(--space-sm);
`
export const IconList = ({ color, vertical, showText=true }) => {
  return (
    <IconListWrapper vertical={vertical}>
      <IconItem>
        <a href="https://twitter.com/gottu91" target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm9.1,14.467A12.251,12.251,0,0,1,8.25,25.347a8.668,8.668,0,0,0,6.378-1.784A4.318,4.318,0,0,1,10.6,20.571a4.321,4.321,0,0,0,1.947-.073,4.315,4.315,0,0,1-3.456-4.279,4.3,4.3,0,0,0,1.952.539A4.315,4.315,0,0,1,9.711,11a12.229,12.229,0,0,0,8.88,4.5,4.312,4.312,0,0,1,7.343-3.93,8.594,8.594,0,0,0,2.736-1.046,4.326,4.326,0,0,1-1.894,2.384,8.6,8.6,0,0,0,2.474-.68A8.648,8.648,0,0,1,27.1,14.467Z" fill={color}/>
          </svg>
          {showText && <p>@gottu91</p> }

        </a>
      </IconItem>
      <IconItem>
        <a href="https://github.com/gottu91-code" target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm3.327,27.924c-.531.1-.7-.224-.7-.5V24.538a2.5,2.5,0,0,0-.722-1.944c2.34-.259,4.8-1.148,4.8-5.181a4.06,4.06,0,0,0-1.082-2.818,3.778,3.778,0,0,0-.1-2.78s-.88-.282-2.884,1.075a10.01,10.01,0,0,0-5.26,0c-2.006-1.358-2.888-1.075-2.888-1.075a3.774,3.774,0,0,0-.1,2.778A4.061,4.061,0,0,0,11.3,17.413c0,4.023,2.451,4.923,4.784,5.188a2.237,2.237,0,0,0-.666,1.4,2.235,2.235,0,0,1-3.056-.873,2.209,2.209,0,0,0-1.609-1.083s-1.024-.013-.072.639a2.769,2.769,0,0,1,1.166,1.536s.607,1.875,3.529,1.239v1.954c0,.278-.169.6-.693.506a10.5,10.5,0,1,1,6.645,0Z" fill={color}/>
          </svg>
          {showText && <p>@gottu91-code</p> }
        </a>
      </IconItem>
    </IconListWrapper>
  )
}