import styled from 'styled-components';
import PageControls from './pageControls';

const StyledPage=styled.div`
  padding: 44px 42px 44px 60px;
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
