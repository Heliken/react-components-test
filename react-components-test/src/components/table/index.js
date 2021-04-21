import styled from 'styled-components';
import { colors } from '../../constants';
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
  }
  td{
    padding-top:19px;
    padding-bottom:19px;
  }
  svg{
    margin-right:8px;
  }
  th{
    font-weight:500;
    padding-bottom:0;
  }
`

const TableHead = styled.thead`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align:left;
  color:${colors.textSecondary};
`
const TableBody = styled.tbody`
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
    }
    &:last-child{
      border-right:1px solid ${colors.textPrimary}1A;
      border-top-right-radius:inherit;
      border-bottom-right-radius:inherit;
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
    const values = Object.values(row).map((col) => 
      <td>
        <TableCol>
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