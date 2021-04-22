import styled from 'styled-components';
import Icon from '../../icon';
import { breakpoints } from '../../../constants';
const StyledNavUnit = styled.a`
  display: flex;
  align-items: center;
  background-color: ${props => props.active ? '#fff' : 'transparent'};
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background-color .3s ease-in-out;
  svg {
    margin-right: 16px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width:${breakpoints.tablet}){
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