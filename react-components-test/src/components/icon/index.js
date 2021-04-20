import styled from 'styled-components';
import { colors } from '../../constants';

const StyledIcon = styled.svg`
    fill:${props => props.fill || colors.textPrimary };
    width:${props => props.width || '20px'};
    height:${props => props.height || '20px'}
`;

const Icon = ({fill, name}) => {
  return(
    <StyledIcon fill={fill}>
      <use xlinkHref={`#${name}`}></use>
    </StyledIcon>
  )
}
export default Icon;