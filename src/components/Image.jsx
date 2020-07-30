import styled, { css } from 'styled-components'
import Box from './Box'

const StyledImage = styled(Box)`
  border-radius: 0;

  ${props =>
    props.circle &&
    css`
      border-radius: 50%;
    `}

  ${props =>
    props.rounded &&
    css`
      border-radius: 8px;
    `}
`

const Image = ({ size, src, ...props }) => (
  <StyledImage as="img" width={size} height={size} src={src} {...props} />
)

export default Image
