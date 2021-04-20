import styled, { css } from 'styled-components';
import { colors } from '../../../constants';

const Button=styled.a`
  text-align: center;
  padding: 8px 18px;
  letter-spacing: 0.02em;
  border-radius:6px;
  ${props => props.accent && css`
    background: ${colors.accent}1A;
    color: ${colors.accent};
  `}
`

export default Button;