import styled from 'styled-components'
import theme from 'theme'

const H1 = styled.h1`
  font-family: ${theme.fonts.header};
  font-size: 40px;
  font-weight: 600;
  opacity: ${props => props.opacity};
  color: ${props => props.color};
`

export default H1
