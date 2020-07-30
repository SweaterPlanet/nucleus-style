import styled, { css } from 'styled-components'
import Box from './Box'

const StyledImage = styled(Box)`
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
    `}
`

const Image = ({ src, size, ...props }) => (
  <StyledImage as="img" src={src} width={size} height={size} {...props} />
)

export default Image
