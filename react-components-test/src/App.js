import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Header from './components/header';
import { breakpoints } from './constants';

const PageBody=styled.div`
  margin-left:247px;
  @media (max-width:${breakpoints.tablet}px){
    margin-left:0;
    padding-top:55px;
  }
`

const App = () => {
  const [showMenu, setShowMenu] = useState(0);
  return (
    <div>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Sidebar active={showMenu} />
      <PageBody>
        <Dashboard/>
      </PageBody>
    </div>
  )
}

export default App;
