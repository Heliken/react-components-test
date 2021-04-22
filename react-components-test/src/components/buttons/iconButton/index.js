
import styled from 'styled-components';
import Icon from '../../icon';
import { colors } from '../../../constants';

const StyledIconButton = styled.a`
  width: 24px;
  height: 24px;
  svg{
    width:100%
    height:100%;
    transition:fill .3s ease-in-out,stroke .3s ease-in-out;
    stroke:${colors.textPrimary};
    fill:${colors.textPrimary};
    &:hover{
      stroke:${colors.accent};
      fill:${colors.accent};
    }
  }
`
const IconButton = ({icon}) => {
  return(
    <StyledIconButton href="#/">
      <Icon width='100%' height="100%" name={icon}></Icon>
    </StyledIconButton>
  )
}
export default IconButton;