import styled from 'styled-components';
import PageControls from './pageControls';
import { breakpoints } from '../../constants';

const StyledPage=styled.div`
  padding: 44px 42px 44px 60px;
  @media (max-width:${breakpoints.smallDesktop}px){
    padding: 32px;
  }
  @media (max-width:${breakpoints.tablet}px){
    padding-left:16px;
    padding-right:16px;
  }
  @media (max-width:${breakpoints.mobile}px){
    height:calc(100vh - 55px);
    display:flex;
    flex-direction:column;
    padding:15px 16px;
  }
    
`

const Page = ({children}) => {
  return(
    <StyledPage>
      <PageControls/>
      {children}
    </StyledPage>
  )
};

export default Page;
