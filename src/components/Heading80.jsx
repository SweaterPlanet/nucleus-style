import styled from 'styled-components'

const Heading80 = styled.h1`
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 80px;
  font-weight: ${(props) => props.weight || 600};
  opacity: ${(props) => props.opacity || 1};
  color: ${(props) => props.color};
`

export default Heading80
