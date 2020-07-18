import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 80px;
  font-weight: ${props => props.weight || 'bold'};
  color: ${props => props.color};
`

export default H1;