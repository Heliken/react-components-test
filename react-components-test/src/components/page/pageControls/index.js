
import styled from 'styled-components';
import IconButton from '../../buttons/iconButton';
import Button from '../../buttons/button';

const StyledPageControls=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:46px;
  
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
