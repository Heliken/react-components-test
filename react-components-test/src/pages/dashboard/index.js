import styled from 'styled-components';
import { colors } from '../../constants';
import Page from '../../components/page';
import Select from '../../components/select';
import Table from '../../components/table';

const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const tableDataSample = {
  'Date': {
    val:'January 06, 2020',
    icon:{
      color: colors.textPrimary,
      name: 'user-check',
      size: 20
    },
  },
  'Shift type': {
    val: 'Afternoon',
    icon: false,
  },
  'Period': {
    val: '15:00 - 23:00',
    icon: {
      color: `${colors.textPrimary}80`,
      name: 'clock',
      size:  18
    },
  },
  'Hours': {
    val: '8h',
    icon: false
  },
  'Salary (gross)': {
    val: '$1,630',
    icon: false
  },
  'Bonus (gross)': {
    val: '30',
    icon: false
  }
}
const tableDataGenerated = new Array(15).fill(tableDataSample);


const DashboardHeader=styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  margin-bottom: 12px;
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
        <Table data={tableDataGenerated}/>
      </DashboardBody>
    </Page>
  )
}
export default Dashboard;