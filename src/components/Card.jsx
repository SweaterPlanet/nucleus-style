import styled from 'styled-components'
import Box from './Box'

const Card = styled(Box)`
  border-radius: ${props => (props.rounded ? '8px' : 0)};
  outline: ${props => props.outline || ''};
  opacity: ${props => props.opacity || 1};
  padding: ${props => props.padding || props.p || '20px'};
`

export default Card
