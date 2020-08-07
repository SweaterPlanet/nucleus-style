import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const StyledLink = styled.a`
  font-family: ${theme.fonts.header};
  font-weight: 600;
  opacity: ${props => props.opacity};
  color: ${props => props.color};
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`

function Link(props) {
  const button = props.button

  if (button) {
    return (
      <StyledLink as="button " {...props}>
        {props.children}
      </StyledLink>
    )
  }

  return <StyledLink {...props}>{props.children}</StyledLink>
}

Link.propTypes = {
  button: PropTypes.bool,
  color: PropTypes.oneOf([
    'aqua',
    'black',
    'blue',
    'green',
    'paper',
    'purple',
    'red',
    'slate',
    'white',
  ]),
  opacity: PropTypes.number,
}

Link.defaultProps = {
  button: false,
  color: 'black',
  opacity: 1,
}

export default Link
