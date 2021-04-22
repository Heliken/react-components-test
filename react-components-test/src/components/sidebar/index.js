import styled from 'styled-components';
import { colors, breakpoints } from '../../constants';
import Navigation from '../navigation';
import User from '../user';
import Button from '../buttons/button';

const SidebarControls=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media (max-width:${breakpoints.tablet}px){
    order:-1;
    margin-bottom:24px;
  }
  ${Button}{
    display:none;
    @media (max-width:${breakpoints.tablet}px){
      display:block;
      margin-right:12px;
    }
  }
`

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 247px;
  height: 100%;
  background-color: ${colors.background};
  padding: 45px 24px 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width:${breakpoints.tablet}px){
    padding: 30px 17px;
    justify-content:flex-start;
    transition:opacity .3s linear,visibility .3s linear;
    position:fixed;
    z-index:10;
    height:auto;
    overflow-y:auto;
    top:55px;
    left:0;
    bottom:0;
    width:100%;
    opacity:${props => props.active ? '1':'0'};
    visibility:${props => props.active ? 'visible':'hidden'};
    background-color:#fff;
  }
`
const Sidebar = ({active}) => {
  return(
    <StyledSidebar active={active}>
      <Navigation activeUnit={0} />
      <SidebarControls>
        <User/>
        <Button accent href="#/">Sign out</Button>
      </SidebarControls>
    </StyledSidebar>
  )
};

export default Sidebar;
