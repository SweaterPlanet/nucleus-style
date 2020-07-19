import styled from 'styled-components'

const Heading38 = styled.h2`
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 38px;
  font-weight: ${(props) => props.weight || 600};
  opacity: ${(props) => props.opacity || 1};
  color: ${(props) => props.color};
`

export default Heading38
