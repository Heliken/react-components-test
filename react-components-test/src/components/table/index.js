import styled from 'styled-components';
import { colors, breakpoints } from '../../constants';
import Icon from '../icon';
import TableRow from './tableRow';

const StyledTable = styled.table`
  width:100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  @media (max-width:${breakpoints.mobile}px){
    display:block;
  }

  th,td {
    @media (min-width:${breakpoints.mobile + 1}px){
      padding-right:20px;
      &:first-child{
        padding-left:19px;
      }
    }
  }

  td{
    @media (min-width:${breakpoints.mobile + 1}px){
      padding-top:19px;
      padding-bottom:19px;
      border-top: 1px solid ${colors.textPrimary}1A;
      border-bottom:1px solid ${colors.textPrimary}1A;
      &:first-child{
        border-top-left-radius:inherit;
        border-bottom-left-radius:inherit;
        border-left:1px solid ${colors.textPrimary}1A;
      }
      &:last-child{
        border-right:1px solid ${colors.textPrimary}1A;
        border-top-right-radius:inherit;
        border-bottom-right-radius:inherit;
      }
    }
    @media (max-width:${breakpoints.mobile}px){
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

  th {
    font-weight:500;
    padding-bottom:0;
  }

  svg{
    margin-right:8px;
    @media (max-width:${breakpoints.mobile}px){
      display:none;
    }
  }
`

const TableHead = styled.thead`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align:left;
  color:${colors.textSecondary};
  @media (max-width:${breakpoints.mobile}px){
    display:none;
  }
`
const TableBody = styled.tbody`
  @media (max-width:${breakpoints.mobile}px){
    display:block;
  }
`

const TableCol = styled.div`
  display:flex;
  align-items:center;
`

const Table = ({data}) => {
  const headerData = Object.keys(data[0]);
  const headerUnits = headerData.map((item, index) => <th key={index}>{item}</th>)
  const bodyUnits = data.map((row, index)=>{
    const values = Object.values(row).map((col, colIndex) => 
      <td key={colIndex} data-title={headerData[colIndex]}>
        <TableCol >
          {col.icon ? <Icon name={col.icon.name} fill={col.icon.color} width={col.icon.size} height={col.icon.size}/>:  null}
          <span>{col.val}</span>
        </TableCol>
      </td>
      );
    return <TableRow key={index}>{values}</TableRow>
  })
  return(
    <StyledTable>
      <TableHead>
        <tr>
          {headerUnits}
        </tr>
      </TableHead>
      <TableBody>
        {bodyUnits}
      </TableBody>
      
    </StyledTable>
  )
}

export default Table;