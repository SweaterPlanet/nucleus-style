import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Box from '../Box/index'

export const StyledImage = styled(Box)`
  border-radius: 0;
  overflow: hidden;
  object-fit: cover;

  ${props =>
    props.circle &&
    css`
      border-radius: 50%;
      width: ${props => props.width};
      height: ${props => props.width};
    `}

  ${props =>
    props.round &&
    css`
      border-radius: 8px;
    `}

    ${props =>
      props.square &&
      css`
        width: ${props => props.width};
        height: ${props => props.width};
      `}
`

function Image(props) {
  return (
    <StyledImage
      as="img"
      width={props.width}
      height={props.height}
      src={props.src}
      {...props}
    />
  )
}

Image.propTypes = {
  circle: PropTypes.bool,
  round: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  ...Box.propTypes,
}

Image.defaultProps = {
  circle: false,
  round: false,
  ...Box.defaultProps,
}

export default Image
