import styled from 'styled-components';
import { colors, breakpoints } from '../../constants';
import Icon from '../icon';

const StyledTable = styled.table`
  width:100%;
  border-collapse: separate;
    border-spacing: 0 10px;
  th,td{
    padding-right:20px;
    &:first-child{
      padding-left:19px;
    }
    @media (max-width:${breakpoints.mobile}){
      padding-right:0;
      &:first-child{
        padding-left:0px;
      }
    }
  }
  td{
    padding-top:19px;
    padding-bottom:19px;
    @media (max-width:${breakpoints.mobile}){
      padding-top:0;
      padding-bottom:0;
    }
  }
  svg{
    margin-right:8px;
    @media (max-width:${breakpoints.mobile}){
      display:none;
    }
  }
  th{
    font-weight:500;
    padding-bottom:0;
  }
  @media (max-width:${breakpoints.mobile}){
    display:block;
  }
`

const TableHead = styled.thead`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align:left;
  color:${colors.textSecondary};
  @media (max-width:${breakpoints.mobile}){
    display:none;
  }
`
const TableBody = styled.tbody`
  @media (max-width:${breakpoints.mobile}){
    display:block;
  }
`
const TableRow = styled.tr`
  box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
  border-radius: 20px;
  td{
    border-top: 1px solid ${colors.textPrimary}1A;
    border-bottom:1px solid ${colors.textPrimary}1A;
    &:first-child{
      border-top-left-radius:inherit;
      border-bottom-left-radius:inherit;
      border-left:1px solid ${colors.textPrimary}1A;
      @media (max-width:${breakpoints.mobile}){
        border:none;
      }
    }
    &:last-child{
      border-right:1px solid ${colors.textPrimary}1A;
      border-top-right-radius:inherit;
      border-bottom-right-radius:inherit;
      @media (max-width:${breakpoints.mobile}){
        border:none;
        margin-bottom:0;
      }
    }
    @media (max-width:${breakpoints.mobile}){
      border:none;
      display:flex;
      justify-content:space-between;
      align-items:flex-end;
      &:before{
        content:attr(data-title);
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.03em;
        text-transform:uppercase;
        color:${colors.textSecondary};
      }
      margin-bottom:15px;
    }
  }
  @media (max-width:${breakpoints.mobile}){
    display:block;
    border:1px solid ${colors.textPrimary}1A;
    margin-bottom:16px;
    padding: 15px 16px;
    &:last-child{
      margin-bottom:0;
    }
  }
`
const TableCol = styled.div`
  display:flex;
  align-items:center;
`

const Table = ({data}) => {
  const headerData = Object.keys(data[0]);
  const headerUnits = headerData.map((item) => <th>{item}</th>)
  const bodyUnits = data.map((row)=>{
    const values = Object.values(row).map((col, colIndex) => 
      <td data-title={headerData[colIndex]}>
        <TableCol >
          {col.icon ? <Icon name={col.icon.name} fill={col.icon.color} width={col.icon.size} height={col.icon.size}></Icon>:  null}
          <span>{col.val}</span>
        </TableCol>
        
      </td>
      );
    return <TableRow>{values}</TableRow>
  })
  return(
    <StyledTable>
      <TableHead>
        {headerUnits}
      </TableHead>
      <TableBody>
        {bodyUnits}
      </TableBody>
    </StyledTable>
  )
}

export default Table;