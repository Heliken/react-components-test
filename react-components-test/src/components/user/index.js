import styled from 'styled-components';
import user from './user.jpg'

const StyledUser=styled.a`
  display: flex;
  align-items: center;
`
const StyledUserImage=styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-size:cover;
  background-position:center;
  margin-right: 15px;
  margin-left: 11px;
`
const User = () => {
  return(
    <StyledUser href="#/">
      <StyledUserImage style={{backgroundImage:`url(${user})`}}/>
      <span>Darlene<br/>Robertson</span>
    </StyledUser>
  )
};

export default User;
