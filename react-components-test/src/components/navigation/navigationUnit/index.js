import styled from 'styled-components';
import Icon from '../../icon';
import { colors, breakpoints } from '../../../constants';
const StyledNavUnit = styled.a`
  display: flex;
  align-items: center;
  background-color: ${props => props.active ? '#fff' : 'transparent'};
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background-color .3s ease-in-out,color .3s ease-in-out;
  svg {
    margin-right: 16px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover{
    color:${colors.accent}
  }
  @media (max-width:${breakpoints.tablet}px){
    margin-bottom:1px;
  }
`

const NavUnit = ({icon, text, isActive}) => {
  return(
    <StyledNavUnit active={isActive} href="#/">
      <Icon name={icon}/>
      <span>{text}</span>
    </StyledNavUnit>
  )
}
export default NavUnit;