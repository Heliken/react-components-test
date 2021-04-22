
import styled from 'styled-components';
import IconButton from '../../buttons/iconButton';
import Button from '../../buttons/button';
import { breakpoints } from '../../../constants';

const StyledPageControls=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:46px;
  @media (max-width:${breakpoints.tablet}){
    display:none;
  }
`
const PageControls = () => {
  return(
    <StyledPageControls>
      <IconButton icon='chevron'/>
      <Button accent href="#/">Sign out</Button>
    </StyledPageControls>
  )
}

export default PageControls;
