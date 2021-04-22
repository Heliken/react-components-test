import styled from 'styled-components';
import { colors, breakpoints } from '../../constants';
import { scrollbarStyles } from '../../helpers/style-helpers';
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
  @media (max-width:${breakpoints.mobile}){
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    margin-bottom: 4px;
  }
`

const DashBoardTitle=styled.h1`
  font-weight: bold;
  font-size:40px;
  line-height:48px;
  margin:0;
  margin-right:20px;
  span{
    color:${colors.accent}
  }
  @media (max-width:${breakpoints.mobile}){
    font-size: 24px;
    line-height: 29px;
    margin-bottom:15px;
  }
`
const DashboardBody=styled.div`
  @media (max-width:${breakpoints.mobile}){
    padding-top:11px;
    ${scrollbarStyles};
    flex:1;
    overflow-x:hidden;
    overflow-y:auto;
    width: calc(100% + 10px);
    padding-right: 7px;
  }
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