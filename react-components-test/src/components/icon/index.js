import styled from 'styled-components';
import { colors } from '../../constants';

const StyledIcon = styled.svg`
  fill:${props => props.fill || colors.textPrimary };
  width:${props => props.width || '20px'};
  height:${props => props.height || '20px'}
`;

const Icon = ({fill, name, width, height}) => {
  return(
    <StyledIcon fill={fill} stroke={fill} width={width} height={height}>
      <use xlinkHref={`#${name}`}></use>
    </StyledIcon>
  )
}
export default Icon;