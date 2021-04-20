import styled from 'styled-components';
import { colors } from '../../constants';
import Navigation from '../navigation';

const StyledSidebar = styled.aside`
  position: fixed;
  top:0;
  left:0;
  width: 247px;
  height:100%;
  background-color:${colors.background};
  padding: 45px 24px 42px;
`
const Sidebar = () => {
  return(
    <StyledSidebar>
      <Navigation activeUnit={0} />
    </StyledSidebar>
  )
};

export default Sidebar;
