import styled from 'styled-components';

const ButtonMaxWidth = styled.button`
  /* text */
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  font-size: 40px;
  font-weight: 600;

  /* button styles */
  border: none;
  border-radius: 10px;
  padding: 14px 0;
  width: 100%;
  color: ${props => props.color};
  opacity: ${props => props.opacity || 1};
  background-color: ${props => props.bg};
  cursor: pointer;
`

export default ButtonMaxWidth;