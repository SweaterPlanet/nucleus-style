import styled from 'styled-components'

const Tag = styled('span')`
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  border-radius: 32px;
  padding: 4px 16px;

  &:hover {
    text-decoration: none;
  }
`

export default Tag
