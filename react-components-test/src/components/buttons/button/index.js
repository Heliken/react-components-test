import styled, { css } from 'styled-components';
import { colors } from '../../../constants';

const Button=styled.a`
  text-align: center;
  padding: 8px 18px;
  letter-spacing: 0.02em;
  border-radius:6px;
  transition:background-color .3s ease-in-out;
  ${props => props.accent && css`
    background: ${colors.accent}1A;
    color: ${colors.accent};
    &:hover{
      background: ${colors.accent}4D;
    }
  `}
`

export default Button;