
import styled from 'styled-components';
import Icon from '../../icon';
import { colors } from '../../../constants';

const StyledIconButton = styled.a`
  width: 24px;
  height: 24px;
  svg{
    width:100%
    height:100%;
    stroke:${colors.textPrimary};
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