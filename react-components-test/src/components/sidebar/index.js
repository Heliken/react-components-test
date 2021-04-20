import styled from 'styled-components';
import { colors } from '../../constants';
import Navigation from '../navigation';
import User from '../user';

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
`
const Sidebar = () => {
  return(
    <StyledSidebar>
      <Navigation activeUnit={0} />
      <User/>
    </StyledSidebar>
  )
};

export default Sidebar;
