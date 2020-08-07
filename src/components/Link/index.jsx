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
  return (
    <StyledLink as={props.button} {...props}>
      {props.children}
    </StyledLink>
  )
}

Link.propTypes = {
  button: PropTypes.bool,
  color: PropTypes.string,
  opacity: PropTypes.number,
}

Link.defaultProps = {
  button: false,
  color: 'black',
  opacity: 1,
}

export default Link
