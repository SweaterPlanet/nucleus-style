import styled from 'styled-components'
import Box from './Box'

const Flex = styled(Box)`
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

export default Flex
