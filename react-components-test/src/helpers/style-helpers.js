import { colors, breakpoints } from '../constants';

export const scrollbarStyles=`
  &::-webkit-scrollbar {
    width:5px;
    border-radius:2.5px;
    background-color:${colors.scrollbarBg}
  }
  &::-webkit-scrollbar-thumb{
    border-radius:2.5px;
    background-color:${colors.textSecondary}
  }
  @media (max-width:${breakpoints.mobile}px){
    &::-webkit-scrollbar {
      width:3px;
      border-radius:1.5px;
    }
    &::-webkit-scrollbar-thumb{
      border-radius:1.5px;
    }
  }
`;