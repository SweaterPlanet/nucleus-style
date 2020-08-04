import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box/index'

const StyledImage = styled(Box)`
  border-radius: 0;

  ${props =>
    props.circle &&
    css`
      border-radius: 50%;
    `}

  ${props =>
    props.round &&
    css`
      border-radius: 8px;
    `}
`

const Image = ({ size, src, ...props }) => (
  <StyledImage as="img" width={size} height={size} src={src} {...props} />
)

Image.propTypes = {
  circle: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.string,
  src: PropTypes.string,
  ...Box.propTypes,
}

Image.defaultProps = {
  circle: false,
  round: false,
  ...Box.defaultProps,
}

export default Image
