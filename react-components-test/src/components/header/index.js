import styled from 'styled-components';
import { colors, breakpoints } from '../../constants';
import Burger from '../burger';

const StyledHeader = styled.header`
  position:fixed;
  background-color:${colors.textPrimary};
  height:55px;
  top:0;
  left:0;
  width:100%;
  padding:16px;
  align-items:center;
  display:none;
  z-index:10;
  @media (max-width:${breakpoints.tablet}){
    display:flex;
  }
`;

const Header = ({showMenu, setShowMenu}) => {
  return(
    <StyledHeader>
      <Burger active={showMenu} setShowMenu={setShowMenu}/>
    </StyledHeader>
  )
}
export default Header;