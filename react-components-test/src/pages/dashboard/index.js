import {useState} from 'react';
import styled from 'styled-components';
import { colors, breakpoints, months } from '../../constants';
import { scrollbarStyles } from '../../helpers/style-helpers';
import dummyData from '../../helpers/dummy-data';
import Page from '../../components/page';
import Select from '../../components/select';
import Table from '../../components/table';

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
  const [month, setMonth] = useState(months[0]);

  return(
    <Page>
      <DashboardHeader>
        <DashBoardTitle>All Shifts for <span>{month} 2021</span></DashBoardTitle>
        <Select values={months} currentValue={month} setValue={setMonth}/>
      </DashboardHeader>
      <DashboardBody>
        <Table data={dummyData[month]}/>
      </DashboardBody>
    </Page>
  )
}
export default Dashboard;