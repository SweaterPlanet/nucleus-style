import styled, { css } from 'styled-components'
import Button from './Button'

const StyledImage = styled(Button)`
  border-radius: 0;

  ${props =>
    props.rounded &&
    css`
      border-radius: 8px;
    `}

  ${props =>
    props.circle &&
    css`
      border-radius: 50%;
      width: ${props => props.size};
      height: ${props => props.size};
    `}
`

const Image = ({ src, ...props }) => (
  <StyledImage as="img" src={src} {...props} />
)

export default Image
