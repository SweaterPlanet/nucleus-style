import styled from 'styled-components'

const LinkButton = styled.button`
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  opacity: ${props => props.opacity || 1};
  color: ${props => props.color};
  background: none;
  border: none;
  cursor: pointer;
`

export default LinkButton
