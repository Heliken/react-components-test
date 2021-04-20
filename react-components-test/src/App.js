import styled from 'styled-components';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard'

const PageBody=styled.div`
  margin-left:247px;
`

const App = () => {
  return (
    <div>
      <Sidebar />
      <PageBody>
        <Dashboard/>
      </PageBody>
    </div>
  )
}

export default App;
