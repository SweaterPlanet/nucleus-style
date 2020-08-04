import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../Box/index'

const StyledCard = styled(Box)`
  border-radius: ${props => (props.round ? '8px' : 0)};
  outline: ${props => props.outline || ''};
  opacity: ${props => props.opacity};
`

function Card(props) {
  return <StyledCard {...props} />
}

Card.propTypes = {
  opacity: PropTypes.number,
  outline: PropTypes.string,
  round: PropTypes.bool,
  ...Box.propTypes,
}

Card.defaultProps = {
  opacity: 1,
  ...Box.defaultProps,
}

export default Card
