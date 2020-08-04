import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box/index'

const StyledFlex = styled(Box)`
  display: flex;

  /* flex */
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  flex: ${props => props.flex};
  flex-basis: ${props => props.flexBasis};
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  justify-items: ${props => props.justifyItems};
  justify-self: ${props => props.justifySelf};
  order: ${props => props.order};
`

function Flex(props) {
  return <StyledFlex {...props} />
}

Flex.propTypes = {
  alignContent: propTypes.string,
  alignItems: propTypes.string,
  alignSelf: propTypes.string,
  flex: propTypes.string,
  flexBasis: propTypes.string,
  flexDirection: propTypes.string,
  flexGrow: propTypes.string,
  flexShrink: propTypes.string,
  flexWrap: propTypes.string,
  justifyContent: propTypes.string,
  justifyItems: propTypes.string,
  justifySelf: propTypes.string,
  order: propTypes.string,
  ...Box.propTypes,
}

Flex.defaultProps = {
  ...Box.defaultProps,
  display: 'flex',
}

export default Flex
