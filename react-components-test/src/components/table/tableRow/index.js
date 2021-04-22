import styled from 'styled-components';
import { colors, breakpoints } from '../../../constants';

const TableRow = styled.tr`
  box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
  border-radius: 20px;
  @media (max-width:${breakpoints.mobile}px){
    display:block;
    border:1px solid ${colors.textPrimary}1A;
    margin-bottom:16px;
    padding: 15px 16px;
    &:last-child{
      margin-bottom:0;
    }
  }
`
export default TableRow;