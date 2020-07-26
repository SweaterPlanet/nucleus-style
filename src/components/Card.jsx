import styled from 'styled-components'
import Box from './Box'

const Card = styled(Box)`
  border-radius: ${props => (props.rounded ? '8px' : 0)};
`

export default Card
