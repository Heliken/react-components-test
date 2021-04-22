import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 22px;
  height:17px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:2px 1px;
  cursor:pointer;
  span{
    width:100%;
    height:3px;
    border-radius:1px;
    height:3px;
    background-color:#fff;
    transition:transform .3s ease-in-out;
    &:nth-child(1){
      transform:${props => props.active ? `rotate(45deg)translate(4px,5px)` : 'none'};
    }
    &:nth-child(2){
      transform-origin:center left;
      transform:${props => props.active ? `scaleX(0)` : `scaleX(1)`};
    }
    &:nth-child(3){
      transform:${props => props.active ? `rotate(-45deg)translate(2px,-3px)` : 'none'};
    }
  }
`
const Burger = ({active, setShowMenu}) => {
  return(
    <StyledBurger active={active} onClick={()=>setShowMenu(!active)}>
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  )
}

export default Burger;