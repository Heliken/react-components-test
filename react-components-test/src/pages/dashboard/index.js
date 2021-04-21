import styled from 'styled-components';
import { colors } from '../../constants';
import Page from '../../components/page';
import Select from '../../components/select';

var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DashboardHeader=styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  margin-bottom: 26px;
`

const DashBoardTitle=styled.h1`
  font-weight: bold;
  font-size:40px;
  line-height:48px;
  margin:0;
  span{
    color:${colors.accent}
  }
`
const DashboardBody=styled.div`
`

const Dashboard = () => {
  return(
    <Page>
      <DashboardHeader>
        <DashBoardTitle>All Shifts for <span>January 2021</span></DashBoardTitle>
        <Select values={monthsArray}/>
      </DashboardHeader>
      <DashboardBody>

      </DashboardBody>
    </Page>
  )
}
export default Dashboard;