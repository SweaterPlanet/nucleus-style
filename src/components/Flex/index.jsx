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
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  justifyItems: PropTypes.string,
  justifySelf: PropTypes.string,
  order: PropTypes.string,
  ...Box.propTypes,
}

Flex.defaultProps = {
  ...Box.defaultProps,
  display: 'flex',
}

export default Flex
