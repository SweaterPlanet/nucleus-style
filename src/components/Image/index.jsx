import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box/index'

export const StyledImage = styled(Box)`
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

function Image(props) {
  return (
    <StyledImage
      as="img"
      width={props.size}
      height={props.size}
      src={props.src}
      {...props}
    />
  )
}

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
