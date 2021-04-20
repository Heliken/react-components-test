import styled from 'styled-components';
import { colors } from '../../constants';
import NavUnit from './navigation-unit';

const navObj = [
  {
    icon:'dashboard',
    text:'My Dashboard'
  },
  {
    icon:'users',
    text:'People'
  },
  {
    icon:'operations',
    text:'Operations'
  },
  {
    icon:'clipboard',
    text:'Schedule Planning'
  },
  {
    icon:'wrench',
    text:'Administration'
  },
  {
    icon:'file-search-alt',
    text:'Action Tracking'
  },
]
const StyledNav = styled.nav`
  display:flex;
  flex-direction:column;
  align-items: stretch;
`;

const Navigation = ({activeUnit}) => {
  const navList = navObj.map((item, index) => <NavUnit key={index} icon={item.icon} text={item.text} isActive={index === activeUnit}/>);
  return(
    <StyledNav>
      {navList}
    </StyledNav>
  )
}
export default Navigation;